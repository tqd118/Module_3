const { performance } = require('perf_hooks');

function findPrimes(start, end, chunkSize = 5000) {
    const tasks = [];

    const t0 = performance.now();

    const total = end - start + 1;
    let processed = 0;

    let nextProgress = 10;

    function isPrime(n) {
        if (n % 2 === 0 || n < 2) {
            return false;
        }
        if (n === 2) {
            return true;
        }

        const limit = Math.sqrt(n);
        for (let i = 3; i <= limit; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

    for (let from = start; from <= end; from += chunkSize) {
        const to = Math.min(from + chunkSize - 1, end);

        tasks.push(
            Promise.resolve().then(() => {
                const local = [];
                for (let n = from; n <= to; n++) {
                    if (isPrime(n)) local.push(n);
                }
                processed += chunkSize;
                if((processed / total) * 100 >= nextProgress) {
                    console.log(`Progress ${nextProgress}%`);
                    nextProgress += 10;
                }
                return local;
            })
        );
    }

    return Promise.all(tasks).then(parts => {
        const result = parts.flat();

        console.log(`Execution time ${performance.now() - t0} ms`);
        console.log(`Found ${result.length} primes`);
        return result;
    });
}

findPrimes(1, 1000000);