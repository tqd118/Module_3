const { performance } = require('perf_hooks');

function findPrimes(start, end) {
    const primes = [];
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

    function chunk(from) {
        const chunkSize = 5000;
        const to = Math.min(from + chunkSize, end + 1);

        for (let n = from; n < to; n++) {
            if (isPrime(n)) primes.push(n);

            processed++;
            const percent = (processed / total) * 100;

            if (percent >= nextProgress) {
                console.log(`Progress: ${nextProgress}%`);
                nextProgress += 10;
            }
        }

        if (to <= end) {
           setTimeout(() => chunk(to), 0);
        } else {
            const t1 = performance.now();
            console.log(`Found ${primes.length} primes`);
            console.log(`Execution time: ${(t1 - t0)} ms`);
        }
    }

    setTimeout(() => chunk(start), 0);
}

findPrimes(1, 100000000);