import { RateLimiterRedis   } from 'rate-limiter-flexible'

import { Redis } from 'ioredis'

// Global
const redisClient = new Redis({
    host: '127.0.0.1',
    port: 6379
})

export const tokenBucketLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    points: 100,
    duration: 60,
    refillRate: 2,
})


// Login limiter

export const loginLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    points: 5,
    duration: 180
})




