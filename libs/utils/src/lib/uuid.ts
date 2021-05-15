/** @ignore */
declare var msCrypto: Crypto;

/**
 * Générateurs d'UUIDs.
 * https://github.com/kelektiv/node-uuid
 */
export namespace UUID {
  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   * @ignore
   */
  const byteToHex: string[] = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex[i] = (i + 0x100).toString(16).substr(1);
  }

  /** @ignore */
  function bytesToUuid(buffer: any, offset?: number) {
    const bth = byteToHex;
    const start = offset || 0;
    const end = start + 16;
    const arr = [] as string[];
    for (let n = start; n < end; n++) {
      arr.push(bth[buffer[n]]);
    }
    [4, 7, 10, 13].forEach((n) => arr.splice(n, 0, '-'));
    return arr.join('');
  }

  /** @ignore */
  function rng() {
    // Unique ID creation requires a high quality random # generator.
    // In the browser this is a little complicated due to unknown quality of Math.random() and inconsistent support for the `crypto` API.
    // We do the best we can via feature-detection

    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    // Also, find the complete implementation of crypto on IE11.
    const getRandomValues =
      (typeof crypto !== 'undefined' &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto !== 'undefined' &&
        typeof msCrypto.getRandomValues === 'function' &&
        msCrypto.getRandomValues.bind(msCrypto));

    if (getRandomValues) {
      // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
      return getRandomValues(new Uint8Array(16));
    } else {
      // Math.random()-based (RNG)
      // If all else fails, use Math.random().  It's fast, but is of unspecified quality.
      const rnds = new Array(16);
      for (let i = 0, r = 0; i < 16; i++) {
        // tslint:disable:no-bitwise
        if ((i & 0x03) === 0) {
          r = Math.random() * 0x100000000;
        }
        // tslint:disable:no-bitwise
        rnds[i] = (r >>> ((i & 0x03) << 3)) & 0xff;
      }
      return rnds;
    }
  }

  /**
   * Generate and return a RFC4122 v4 UUID.
   *
   * Format: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   *
   * Length: 36 bytes
   * ~~~ts
   * UUID.generateV4(); // => cf160598-fa43-4e27-a839-2a277b123e44
   * UUID.generateV4(); // => 24b6a5c2-d370-40a0-89e4-dc8ed601cf5b
   * ~~~
   * @param options Optional uuid state to apply.
   *        random - Array of 16 numbers (0-255) to use in place of randomly generated values.
   *        rng - Random # generator function that returns an Array[16] of byte values (0-255)
   * @param buffer Array or buffer where UUID bytes are to be written.
   * @param offset Starting index in buffer at which to begin writing.
   * @returns Returns buffer if specified, otherwise the string form of the UUID
   */
  export function generateV4(
    options?: { random?: number[]; rng?: () => number[] } | string,
    buffer?: string[],
    offset?: number
  ): string | string[] {
    const off = (buffer && offset) || 0;

    if (typeof options === 'string') {
      buffer = options === 'binary' ? new Array(16) : undefined;
      options = undefined;
    }
    options = options || {};

    const rnds = options.random || (options.rng || rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    // Copy bytes to buffer, if provided
    if (buffer) {
      for (let i = 0; i < 16; ++i) {
        buffer[off + i] = rnds[i];
      }
    }

    return buffer || bytesToUuid(rnds);
  }
}
Object.freeze(UUID);
