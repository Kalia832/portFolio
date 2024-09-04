import { createContext } from "react";

export const Candidate = createContext({});

const CandidateContextProvider = ({ children }) => {
  const candidateList = {
    Name: "Kalia Gouda",
    MessageTitle: "SoftWare Enginner",
    MessageDesc:
      "Quickly design and customize responsive mobile-first sites with Bootstrap, the worlds most popular front-end open source toolkit,featuring Sass variables and mixins, responsive grid system,extensive prebuilt components, and powerful JavaScript plugins.",
    Education: [
      {
        InstituteName: "SSVM",
        YearFrom: "2016",
        YearTo: "2017",
        Description:
          "Schooling typically refers to formal education provided in elementary and secondary schools, covering the ages of about 5 to 18. It includes foundational subjects like math, science, language arts, and social studies, as well as physical education and the arts. The main goal of schooling is to develop basic skills, critical thinking, and social abilities, preparing students for higher education or vocational training.",
      },
      {
        InstituteName: "Science College HinjiliCut",
        YearFrom: "2017",
        YearTo: "2019",
        Description:
          "Intermediate education, often referred to as junior college or high school, follows secondary school and usually takes 1 to 2 years to complete. It provides more specialized subjects and may include advanced placement courses or vocational training. This level aims to refine students' skills and interests, serving as a bridge to higher education or the workforce.",
      },
      {
        InstituteName: "Science College HinjiliCut",
        YearFrom: "2019",
        YearTo: "2022",
        Description:
          "Graduation refers to obtaining a bachelor’s degree, which is an undergraduate degree awarded by colleges and universities. It generally takes 3 to 4 years to complete and combines general education courses with specialized studies in a major field. This level prepares students with in-depth knowledge and skills, setting them up for careers or further studies.",
      },
      {
        InstituteName: "Nist Univesity",
        YearFrom: "2023",
        YearTo: "2025",
        Description:
          "A master’s degree is a graduate degree that provides advanced knowledge in a specific field of study, requiring 1 to 2 years of studies after a bachelor’s degree. The curriculum includes coursework, research, and often a thesis or project, focusing on a particular discipline. This degree enhances professional skills and can lead to higher-level positions and increased earning potential.",
      },
    ],
    Projects: [
      {
        ProjectName: "PortFolio Website",
        Skills: ["Html", "CSS", "javaScript", "React"],
        ProjectDescription: "This is the WebSite",
      },
      {
        ProjectName: "PortFolio Website",
        Skills: ["Html", "CSS", "javaScript", "React"],
        ProjectDescription: "This is the WebSite",
      },
    ],
    Contact: {
      Phone: "8320000008",
      Email: "my.name.2023@nist.edu",
      Linkedin: "https://linkedin.com/in/devkalia",
      Github: "https://github.com/Kalia832",
    },
  };

  return (
    <Candidate.Provider key={"thisiscontext"} value={candidateList}>
      {children}
    </Candidate.Provider>
  );
};

export default CandidateContextProvider;
