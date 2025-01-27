import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];



export const gridItems = [
  // {
  //   id: 1,
  //   title: "Unlocking Insights Through Data Science",
  //   description: "I love turning raw data into meaningful insights. It's fascinating to uncover stories hidden in numbers and use them to solve real-world problems. My goal is to simplify complexity and make data accessible to everyone.",
  //   className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  //   imgClassName: "w-full h-full",
  //   titleClassName: "text-left",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 1,
    title: "Unlocking Insights Through Data Science",
    //description:"",
    description: "I love turning raw data into valuable insights to solve real-world problems.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "text-left",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 1,
  //   title: "I love turning raw data into valuable insights to solve real-world problems.",
  //   description:"",
  //   // description: "I love turning raw data into meaningful insights. It's fascinating to uncover stories hidden in numbers and use them to solve real-world problems.",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "w-full h-full",
  //   titleClassName: "text-left",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 2,
    title: "Balancing Data Science with Creative Design",
    //description:"",
    
    description: "I enjoy creating intuitive websites and experimenting with front-end design.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "text-left",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description:"",
    //description: "Python, SQL, Pandas, Matplotlib , and Sci-kit learn are my trusted companions in the world of data.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "text-left justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Exploring the World of AI and Machine Learning",
    description:"I dive into machine learning algorithms and build predictive models.",
    //description: "I enjoy diving into machine learning algorithms, building predictive models, and experimenting with neural networks. It's an exciting field that never stops evolving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "text-left",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Bringing Data to Life Through Visualization",
    description:"I create engaging visual stories with dynamic charts and dashboards.",
    //description: "Visual storytelling is my passion. Whether it's dynamic JavaScript libraries or interactive dashboards, I love creating visuals that make data intuitive and engaging.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "text-left",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 6,
  //   title: "Let's Build Something Great Together",
  //   description: "I'm always excited to collaborate on projects that make a difference. Let's connect and turn your ideas into impactful solutions.",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "text-left",
  //   img: "/collaborate.svg",
  //   spareImg: "",
  // },
];



export const projects = [
  {
    id: 1,
    title: "Disney Dilemma",
    des: "Honors Research Project on emotion detection in different Disney Films",
    img: "/proj1.jpg",
    iconLists: ["/re.svg","/css.svg","/next.svg","/python.svg","/pandas.svg","/Matplotlib.svg","/Jupyter.svg"],
    link: "https://su1-honors-research.vercel.app/",
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    des: "Machine learning pipeline for predicting customer churn with Flask.",
    img: "/churn.png",
    iconLists: ["/python.svg","/pandas.svg","/Matplotlib.svg","/Jupyter.svg","/Flask.png","/scikit-learn.svg"],
    link: "https://github.com/VelvetDragon/Churn-Analysis-and-Prediction",
  },
  {
    id: 3,
    title: "Sentiment Analysis",
    des: "Sentiment analysis on product reviews using NLP techniques.",
    img: "/alexa.png",
    iconLists: ["/python.svg","/pandas.svg","/Matplotlib.svg","/Jupyter.svg","/scikit-learn.svg"],
    link: "https://github.com/VelvetDragon/Sentiment-Analysis-Amazon-Reviews",
  },
  {
    id: 4,
    title: "Airlines Ticket Fare Prediction",
    des: "Predictive model for airline ticket prices using regression algorithms.",
    img: "/price.png",
    iconLists: ["/python.svg","/pandas.svg","/Matplotlib.svg","/Jupyter.svg","/scikit-learn.svg"],
    link: "https://github.com/VelvetDragon/Flight-Ticket-Price-Prediction-Using-ML",
  },
  {
    id: 5,
    title: "Password Strength Prediction",
    des: "Predict password strength using NLP techniques and classification models.",
    img: "/pw.png",
    iconLists: ["/python.svg","/pandas.svg","/Matplotlib.svg","/Jupyter.svg","/scikit-learn.svg"],
    link: "https://github.com/VelvetDragon/Password-Strength-Prediction-using-NLP",
  },
  {
    id: 6,
    title: "Sales Insights Dashboard",
    des: "Interactive dashboard to visualize sales data with Power BI and SQL.",
    img: "/sales.png",
    iconLists: ["/sql.svg","/powerBI.png"],
    link: "https://github.com/VelvetDragon/sales-insights",
  },
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/VelvetDragon"
  },
  {
    id: 2,
    img: "/insta.svg",
    link:"https://www.instagram.com/s_.uwan/"
  },
  {
    id: 3,
    img: "/link.svg",
  },
];