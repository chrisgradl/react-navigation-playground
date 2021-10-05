import redis from "../lib/redis";

it('should fetch datat', async () => {
    console.log(process.env.REDIS_URL)
    const features = (await redis.hvals("projects"))
        .map((entry) => JSON.parse(entry))
        .sort((a, b) => b.createdAt - a.createdAt);


    console.log(features[0])


});
