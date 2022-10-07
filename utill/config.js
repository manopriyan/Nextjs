var domain;

if(process.env.NODE_ENV ==='production') {
    domain = "demo-app-flame.vercel.app/api";
} else {
    domain= "http://localhost:3000/api";
}

export default domain