import "./App.css";
import Header from "./Header";
import Job from "./Job";
import Jobs from "./Jobs";
import Title from "./Title";

function App() {
  return (
    <div class="container">
      <Header
        headerStyle="header"
        header={<Title titleStyle="title" title={"The Job Board"} />}
      />
      <Jobs
        jobsStyle="jobs"
        jobs1={
          <Job
            jobStyle="job"
            jobStyling={{ border: "solid #E30413 10px" }}
            title={"Full Time Sales Associate - Sydney Boutique"}
            contractType={"CDI"}
            country={"Australie"}
            city={"Sydney"}
          />
        }
        jobs2={
          <Job
            jobStyle="job"
            jobStyling={{ border: "solid #3EA535 10px" }}
            title={"Agent de Sécurité - Pantin"}
            contractType={"CDI"}
            country={"France"}
            city={"Pantin"}
          />
        }
        jobs3={
          <Job
            jobStyle="job"
            jobStyling={{ border: "solid #FFEE00 10px" }}
            title={"Responsable d'Atelier (H/F)"}
            contractType={"CDD"}
            country={"France"}
            city={"Paris"}
          />
        }
        jobs4={
          <Job
            jobStyle="job"
            jobStyling={{ border: "solid #039FE3 10px" }}
            title={"Chef de Projets"}
            contractType={"CDD"}
            country={"France"}
            city={"Paris"}
          />
        }
        jobs5={
          <Job
            jobStyle="job"
            jobStyling={{ border: "solid #F8C5AF 10px" }}
            title={"Développeur React.js"}
            contractType={"CDI"}
            country={"France"}
            city={"Paris"}
          />
        }
        jobs6={
          <Job
            jobStyle="job"
            jobStyling={{ border: "solid #E30413 10px" }}
            title={"Sales Associate Stockholm"}
            contractType={"CDI"}
            country={"Suède"}
            city={"Stockholm"}
          />
        }
        jobs7={
          <Job
            jobStyle="job"
            jobStyling={{ border: "solid #3EA535 10px" }}
            title={"Vendeur/se - Crans Montana"}
            contractType={"CDI"}
            country={"Suisse"}
            city={"Crans-Montana"}
          />
        }
        jobs8={
          <Job
            jobStyle="job"
            jobStyling={{ border: "solid #FFEE00 10px" }}
            title={"CRM & Data Quality Analyst"}
            contractType={"CDI"}
            country={"USA"}
            city={"New York"}
          />
        }
        jobs9={
          <Job
            jobStyle="job"
            jobStyling={{ border: "solid #039FE3 10px" }}
            title={"Infirmier (H/F)"}
            contractType={"CDI"}
            country={"France"}
            city={"Pantin"}
          />
        }
      />
    </div>
  );
}

export default App;
