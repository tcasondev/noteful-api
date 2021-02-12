module.exports = {
    PORT: process.env.PORT || 9090,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://alykktcwqsudia:d4621b69345975d5e4f440bf78d1d756a3f8d94ed8e7bea6cac9890734a855be@ec2-35-174-118-71.compute-1.amazonaws.com:5432/decib7bvt18i0q',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres@localhost/noteful-test'
};