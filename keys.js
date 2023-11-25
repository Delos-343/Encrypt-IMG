// eslint-disable-next-line no-undef
import { randomBytes } from 'crypto';

// (32 bytes = 256 bits)
const aesEncryptionKey = randomBytes(32).toString('hex');
console.log('AES Encryption Key:', aesEncryptionKey);

// (16 bytes = 128 bits)
const aesEncryptionIV = randomBytes(16).toString('hex');
console.log('AES Encryption IV:', aesEncryptionIV);


// (8 bytes = 64 bits)
const desEncryptionIV = randomBytes(8).toString('hex');
console.log('DES Encryption Key:', desEncryptionIV);


// (16 bytes = 128 bits)
const rc4EncryptionIV = randomBytes(16).toString('hex');
console.log('RC4 Encryption Key:', rc4EncryptionIV);
