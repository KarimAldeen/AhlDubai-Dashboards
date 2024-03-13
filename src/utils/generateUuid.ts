import FingerprintJS from '@fingerprintjs/fingerprintjs';


export const generateFingerprint = async () => {
    // Initialize FingerprintJS
    const fpPromise = FingerprintJS.load();
  
    // Generate fingerprint
    const fp = await fpPromise;
    const result = await fp.get();

    console.log(result.visitorId);
    
  
    // Return the fingerprint
    return result.visitorId;
  };