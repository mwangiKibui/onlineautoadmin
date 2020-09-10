let url;

if(process.env.NODE_ENV === "development") {
    url = `http://localhost:5000`
}else if(process.env.NODE_ENV === "production") {
    url = `https://client-jobs.xyz`
};

export default url;