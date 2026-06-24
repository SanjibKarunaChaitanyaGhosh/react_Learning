
import Cards from './components/Card.jsx'

const App=()=>{

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$68/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag1: "Remote",
    tag2: "Mid-Level",
    pay: "$62/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$80/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 day ago",
    post: "iOS Developer",
    tag1: "Hybrid",
    tag2: "Senior",
    pay: "$85/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Remote",
    tag2: "Senior",
    pay: "$92/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$75/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Mid-Level",
    pay: "$58/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "1 week ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$52/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "3 days ago",
    post: "DevOps Engineer",
    tag1: "Hybrid",
    tag2: "Senior",
    pay: "$65/hour",
    location: "Kolkata, India"
  }
];
  // console.log(jobOpenings)
  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx){

        // console.log(idx);
        
        return <div key={idx}>
            <Cards logo={elem.brandLogo} company={elem.companyName} dpost={elem.datePosted} loc={elem.location} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2} postName={elem.post}/>
        </div>
      })}
     

    </div>
  )
}

export default App