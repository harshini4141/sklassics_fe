import aiCourseImage from '../assets/courses/artificial-intelligence.webp'
import bigDataCourseImage from '../assets/courses/big-data-analytics.webp'
import businessAnalyticsCourseImage from '../assets/courses/business-analytics.webp'
import cProgrammingCourseImage from '../assets/courses/c-programming.webp'
import dataAnalyticsCourseImage from '../assets/courses/data-analytics.webp'
import dataScienceCourseImage from '../assets/courses/data-science.webp'
import dataScienceGenAiCourseImage from '../assets/courses/data-science-gen-ai.png'
import dataScienceFullStackCourseImage from '../assets/courses/data-science-full-stack.webp'

export const allCoursesData = [
  {
    id: 'artificial-intelligence',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'Artificial Intelligence',
    description:
      'Explore AI concepts, tools, and applications. Build practical skills to create intelligent solutions, automate tasks, and solve real-world problems.',
    price: '₹30,000',
    tone: 'violet',
    image: aiCourseImage,
    duration: '10 Weeks',
    level: 'Intermediate',
    rating: '4.9',
    reviewCount: 310,
    students: '1,200+',
    tools: ['Python', 'TensorFlow', 'OpenAI API', 'Hugging Face', 'NumPy', 'Scikit-learn'],
    highlights: ['Prompt Engineering & LLM APIs', 'Neural Networks Architecture', 'Autonomous Agent Workflows', 'Cap-stone AI Project'],
    modules: [
      {
        title: 'Module 1: Foundations of Artificial Intelligence',
        topics: ['History and landscape of AI', 'Search algorithms & heuristics', 'Knowledge representation', 'Mathematical foundations for AI']
      },
      {
        title: 'Module 2: Machine Learning & Neural Networks',
        topics: ['Supervised & unsupervised learning', 'Multi-layer perceptrons', 'Backpropagation & optimization', 'Computer vision basics (CNNs)']
      },
      {
        title: 'Module 3: NLP & Modern Generative Models',
        topics: ['Text preprocessing & tokenization', 'Transformers & Attention mechanisms', 'Working with Large Language Models (LLMs)', 'RAG (Retrieval Augmented Generation) pipeline']
      },
      {
        title: 'Module 4: Deployment & Capstone Project',
        topics: ['API deployment with FastAPI', 'Dockerizing AI models', 'Model evaluation & monitoring', 'Live project presentation & code review']
      }
    ]
  },
  {
    id: 'big-data-analytics',
    category: 'DATA ENGINEERING',
    title: 'Big Data Analytics',
    description:
      'Build expertise in data analysis, data engineering, and big data technologies. Work with real-world tools to create and manage data pipelines.',
    price: '₹30,000',
    tone: 'blue',
    image: bigDataCourseImage,
    duration: '12 Weeks',
    level: 'Intermediate',
    rating: '4.8',
    reviewCount: 245,
    students: '980+',
    tools: ['Apache Spark', 'Hadoop', 'Kafka', 'Hive', 'PySpark', 'AWS EMR'],
    highlights: ['Distributed Data Processing', 'Real-Time Streaming Pipelines', 'Cloud Data Lake Architectures', 'Batch ETL Pipelines'],
    modules: [
      {
        title: 'Module 1: Big Data Ecosystem & Hadoop',
        topics: ['Distributed storage with HDFS', 'MapReduce concepts', 'YARN architecture', 'Data ingestion with Flume and Sqoop']
      },
      {
        title: 'Module 2: Apache Spark & PySpark Processing',
        topics: ['RDDs, DataFrames, and Spark SQL', 'Spark transformations and actions', 'Memory management and optimization', 'PySpark on cloud clusters']
      },
      {
        title: 'Module 3: Real-Time Stream Processing',
        topics: ['Apache Kafka fundamentals', 'Kafka producers, consumers, and brokers', 'Spark Structured Streaming', 'Event-driven architectures']
      },
      {
        title: 'Module 4: Cloud Data Lakes & Capstone',
        topics: ['AWS S3, Glue, and Athena integration', 'Partitioning and indexing strategies', 'End-to-end data pipeline project', 'CI/CD for data pipelines']
      }
    ]
  },
  {
    id: 'business-analytics',
    category: 'BUSINESS INTELLIGENCE',
    title: 'Business Analytics',
    description:
      'Learn demand-driven analytics, data visualization, statistics, and machine learning to turn business data into actionable insights.',
    price: '₹20,000',
    tone: 'orange',
    image: businessAnalyticsCourseImage,
    duration: '8 Weeks',
    level: 'Beginner',
    rating: '4.8',
    reviewCount: 380,
    students: '1,500+',
    tools: ['Advanced Excel', 'Power BI', 'SQL', 'Tableau', 'Statistics', 'Python'],
    highlights: ['Business Metrics & KPIs', 'Executive Dashboarding', 'Predictive Modeling for Business', 'Financial & Sales Analytics'],
    modules: [
      {
        title: 'Module 1: Excel for Business Intelligence',
        topics: ['Advanced functions & formulas (XLOOKUP, INDEX/MATCH)', 'Pivot Tables and dynamic charts', 'What-If analysis & Solver', 'Financial modeling basics']
      },
      {
        title: 'Module 2: Relational Databases & SQL Queries',
        topics: ['Relational schema design', 'Data aggregation & grouping', 'Complex joins & subqueries', 'Window functions for business analysis']
      },
      {
        title: 'Module 3: Business Visualization with Power BI & Tableau',
        topics: ['Data connection and transformation', 'DAX calculations and custom metrics', 'Interactive dashboard design', 'Storytelling with executive reports']
      },
      {
        title: 'Module 4: Predictive Analytics & Strategy',
        topics: ['Hypothesis testing & A/B testing', 'Customer churn and sales forecasting', 'Cohort analysis', 'Real-world business case study']
      }
    ]
  },
  {
    id: 'c-programming',
    category: 'PROGRAMMING',
    title: 'C Programming',
    description:
      'Start with programming fundamentals, from core syntax to problem-solving, and build a strong foundation in C.',
    price: '₹5,000',
    tone: 'green',
    image: cProgrammingCourseImage,
    duration: '6 Weeks',
    level: 'Beginner',
    rating: '4.9',
    reviewCount: 520,
    students: '2,800+',
    tools: ['GCC Compiler', 'VS Code', 'GDB Debugger', 'Linux Terminal', 'Make'],
    highlights: ['Memory Management & Pointers', 'Data Structures from Scratch', 'System-Level Problem Solving', 'Clean Code Practices'],
    modules: [
      {
        title: 'Module 1: Fundamentals & Control Structures',
        topics: ['Data types, operators, and variables', 'Conditional statements (if-else, switch)', 'Loops (for, while, do-while)', 'Functions & scope rules']
      },
      {
        title: 'Module 2: Arrays, Strings, & Pointers',
        topics: ['1D and Multi-dimensional arrays', 'String manipulation functions', 'Pointers and pointer arithmetic', 'Dynamic memory allocation (malloc, free)']
      },
      {
        title: 'Module 3: Structures, Unions, & File I/O',
        topics: ['User-defined structures & unions', 'File handling (reading/writing binary & text)', 'Command-line arguments', 'Bitwise operators and masking']
      },
      {
        title: 'Module 4: Data Structures & Project',
        topics: ['Linked lists, stacks, and queues', 'Recursion & algorithm complexity', 'Debugging techniques with GDB', 'Console-based mini ERP project']
      }
    ]
  },
  {
    id: 'data-analytics',
    category: 'DATA & ANALYTICS',
    title: 'Data Analytics',
    description:
      'Learn to analyze and interpret data with practical work in statistical analysis, predictive modeling, and visualization.',
    price: '₹10,000',
    tone: 'blue',
    image: dataAnalyticsCourseImage,
    duration: '8 Weeks',
    level: 'Beginner',
    rating: '4.9',
    reviewCount: 460,
    students: '2,100+',
    tools: ['SQL', 'Power BI', 'Excel', 'Python', 'Pandas', 'Seaborn'],
    highlights: ['Data Cleaning & Wrangling', 'Exploratory Data Analysis (EDA)', 'Statistical Testing', 'Automated Reporting'],
    modules: [
      {
        title: 'Module 1: Excel Mastery & SQL Essentials',
        topics: ['Advanced Excel modeling and lookups', 'SQL queries, joins, and aggregates', 'Data normalization & schema modeling', 'Working with messy datasets']
      },
      {
        title: 'Module 2: Python for Data Analysis',
        topics: ['Python data structures & NumPy', 'Pandas for data wrangling & cleaning', 'Matplotlib and Seaborn visualization', 'Exploratory data analysis workflows']
      },
      {
        title: 'Module 3: Power BI Dashboards & DAX',
        topics: ['Data modeling in Power BI', 'Calculated columns vs Measures', 'Interactive drill-through reports', 'Publishing and sharing dashboards']
      },
      {
        title: 'Module 4: Business Insights & Capstone',
        topics: ['Translating numbers to business actions', 'KPI tracking and executive summaries', 'End-to-end retail analysis project', 'Portfolio building and presentation']
      }
    ]
  },
  {
    id: 'data-science',
    category: 'DATA SCIENCE',
    title: 'Data Science',
    description:
      'Develop skills in Python, SQL, Excel, machine learning, Power BI, and more through practical projects and mentor-led learning.',
    price: '₹30,000',
    tone: 'violet',
    image: dataScienceCourseImage,
    duration: '12 Weeks',
    level: 'Beginner to Advanced',
    rating: '4.9',
    reviewCount: 680,
    students: '3,400+',
    tools: ['Python', 'SQL', 'Scikit-learn', 'Power BI', 'Pandas', 'NumPy', 'Statsmodels'],
    highlights: ['Machine Learning Algorithms', 'Feature Engineering & Selection', 'Model Evaluation & Tuning', 'Industry Capstone Projects'],
    modules: [
      {
        title: 'Module 1: Programming & Data Wrangling',
        topics: ['Python programming fundamentals', 'NumPy for vector computation', 'Pandas for advanced data manipulation', 'SQL database queries & pipelines']
      },
      {
        title: 'Module 2: Mathematics & Statistical Modeling',
        topics: ['Descriptive and inferential statistics', 'Probability distributions', 'Hypothesis testing (p-values, t-tests, ANOVA)', 'Linear algebra essentials']
      },
      {
        title: 'Module 3: Core Machine Learning',
        topics: ['Regression (Linear, Ridge, Lasso)', 'Classification (Logistic, Decision Trees, Random Forests, XGBoost)', 'Clustering (K-Means, DBSCAN)', 'Model hyperparameter optimization']
      },
      {
        title: 'Module 4: Advanced Modeling & Deployment',
        topics: ['Time-series forecasting with ARIMA', 'Model serialization with Pickle & Joblib', 'Streamlit app building for ML models', 'Comprehensive capstone project']
      }
    ]
  },
  {
    id: 'data-science-gen-ai',
    category: 'DATA SCIENCE & GENERATIVE AI',
    title: 'Data Science + Gen AI',
    description:
      'Build a strong data science foundation and explore generative AI, modern machine learning, and real-world datasets.',
    price: '₹30,000',
    tone: 'orange',
    image: dataScienceGenAiCourseImage,
    duration: '14 Weeks',
    level: 'Intermediate to Advanced',
    rating: '4.95',
    reviewCount: 540,
    students: '2,600+',
    tools: ['Python', 'LangChain', 'OpenAI API', 'ChromaDB', 'Llama 3', 'Streamlit', 'Hugging Face'],
    highlights: ['LLM Fine-tuning & Prompting', 'Vector Databases & RAG Systems', 'Multi-Agent AI Workflows', 'Full-Stack Gen AI Apps'],
    modules: [
      {
        title: 'Module 1: Python, Math & Machine Learning',
        topics: ['Advanced Python & data structures', 'Applied statistics and probability', 'Supervised & unsupervised ML with Scikit-learn', 'Feature engineering at scale']
      },
      {
        title: 'Module 2: Deep Learning & Neural Networks',
        topics: ['PyTorch fundamentals', 'Feedforward networks & backpropagation', 'Convolutional & Recurrent architectures', 'Embeddings and latent vector spaces']
      },
      {
        title: 'Module 3: Generative AI & LLM Engineering',
        topics: ['Transformer architectures & Attention', 'Prompt engineering techniques (CoT, ReAct)', 'Vector search with ChromaDB & FAISS', 'Building production RAG systems with LangChain']
      },
      {
        title: 'Module 4: Autonomous Agents & Product Launch',
        topics: ['LangGraph & multi-agent architectures', 'Local open-source models with Ollama', 'Deploying Gen AI apps to AWS/Cloud', 'Portfolio-ready SaaS capstone project']
      }
    ]
  },
  {
    id: 'data-science-full-stack',
    category: 'DATA SCIENCE',
    title: 'Data Science Full Stack',
    description:
      'Learn SQL, Power BI, statistics, Python, machine learning, deep learning, and NLP with hands-on projects.',
    price: '₹45,000',
    tone: 'green',
    image: dataScienceFullStackCourseImage,
    duration: '16 Weeks',
    level: 'Comprehensive (Zero to Hero)',
    rating: '4.9',
    reviewCount: 410,
    students: '1,900+',
    tools: ['Python', 'SQL', 'FastAPI', 'Power BI', 'PyTorch', 'Docker', 'AWS', 'React'],
    highlights: ['End-to-End ML Pipelines (MLOps)', 'Deep Learning & NLP Mastery', 'Production REST API Development', '1:1 Career Mentorship & Placement'],
    modules: [
      {
        title: 'Module 1: Data Foundations & Database Engineering',
        topics: ['Python and SQL mastery', 'Data structures and algorithms for data', 'Relational and NoSQL databases', 'Power BI enterprise reporting']
      },
      {
        title: 'Module 2: Statistical Learning & Machine Learning',
        topics: ['Comprehensive statistical inference', 'Supervised & unsupervised learning models', 'Ensemble methods (XGBoost, LightGBM)', 'Feature selection & model pipelines']
      },
      {
        title: 'Module 3: Deep Learning, Computer Vision & NLP',
        topics: ['Deep neural networks with PyTorch', 'CNNs for image classification and detection', 'RNNs, LSTMs, and Transformers for NLP', 'BERT and fine-tuning pretrained models']
      },
      {
        title: 'Module 4: MLOps, Cloud Deployment & Capstone',
        topics: ['Packaging models with FastAPI & Docker', 'CI/CD pipelines with GitHub Actions', 'Cloud deployment on AWS EC2/SageMaker', 'End-to-end production capstone']
      }
    ]
  },
  {
    id: 'python-programming',
    category: 'PROGRAMMING',
    title: 'Python Programming',
    description:
      'Learn Python fundamentals, write clean code, and build practical scripts for automation and data workflows.',
    price: '₹10,000',
    tone: 'blue',
    image: dataScienceCourseImage,
    duration: '6 Weeks',
    level: 'Beginner',
    rating: '4.85',
    reviewCount: 390,
    students: '2,300+',
    tools: ['Python 3', 'VS Code', 'Git', 'Virtualenv', 'Requests', 'BeautifulSoup'],
    highlights: ['Object-Oriented Programming (OOP)', 'Web Scraping & Automation', 'REST API Integration', 'Clean, Idiomatic Python'],
    modules: [
      {
        title: 'Module 1: Python Core Foundations',
        topics: ['Syntax, variables, and data types', 'Lists, tuples, dictionaries, and sets', 'Conditionals, loops, and comprehensions', 'Functions, lambda, and scope']
      },
      {
        title: 'Module 2: Object-Oriented Programming & Files',
        topics: ['Classes, objects, and inheritance', 'Polymorphism and encapsulation', 'File handling (JSON, CSV, text)', 'Error handling and custom exceptions']
      },
      {
        title: 'Module 3: Automation & Web Data Collection',
        topics: ['HTTP requests and REST API consumption', 'Web scraping with BeautifulSoup', 'Automating file and desktop tasks', 'Regular expressions (Regex)']
      },
      {
        title: 'Module 4: Packages & Capstone Project',
        topics: ['Virtual environments & Pip', 'Writing unit tests with Pytest', 'Git & GitHub version control', 'Complete automation script project']
      }
    ]
  },
  {
    id: 'machine-learning',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'Machine Learning',
    description:
      'Understand core machine learning methods and build models with hands-on datasets and guided projects.',
    price: '₹25,000',
    tone: 'violet',
    image: aiCourseImage,
    duration: '10 Weeks',
    level: 'Intermediate',
    rating: '4.88',
    reviewCount: 310,
    students: '1,450+',
    tools: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'XGBoost', 'Jupyter'],
    highlights: ['Supervised & Unsupervised Learning', 'Model Evaluation & Cross-Validation', 'Ensemble Techniques', 'Practical Kaggle Problem-Solving'],
    modules: [
      {
        title: 'Module 1: Data Preparation & Exploration',
        topics: ['NumPy arrays and vectorized calculations', 'Pandas for data wrangling', 'Feature scaling and encoding', 'Outlier detection and missing value imputation']
      },
      {
        title: 'Module 2: Supervised Learning Algorithms',
        topics: ['Linear and Polynomial Regression', 'Logistic Regression & ROC-AUC analysis', 'Decision Trees and Random Forests', 'Support Vector Machines (SVM)']
      },
      {
        title: 'Module 3: Unsupervised & Advanced Ensembles',
        topics: ['K-Means clustering and Elbow method', 'Hierarchical and Density-based clustering', 'Gradient Boosting (XGBoost, CatBoost)', 'Dimensionality reduction with PCA']
      },
      {
        title: 'Module 4: Tuning, Validation & Real Project',
        topics: ['K-Fold cross-validation', 'Hyperparameter tuning with GridSearchCV', 'Handling imbalanced datasets (SMOTE)', 'Real-world customer churn prediction project']
      }
    ]
  },
  {
    id: 'power-bi-bootcamp',
    category: 'BUSINESS INTELLIGENCE',
    title: 'Power BI Bootcamp',
    description:
      'Create interactive reports and dashboards by learning data modeling, DAX, and practical visualization.',
    price: '₹12,000',
    tone: 'orange',
    image: dataAnalyticsCourseImage,
    duration: '6 Weeks',
    level: 'Beginner',
    rating: '4.92',
    reviewCount: 420,
    students: '1,800+',
    tools: ['Power BI Desktop', 'Power Query', 'DAX Studio', 'Excel', 'Power BI Service'],
    highlights: ['Power Query ETL Pipelines', 'Advanced DAX Measures', 'Executive KPI Dashboards', 'Power BI Service Sharing & Gateways'],
    modules: [
      {
        title: 'Module 1: Data Ingestion & Power Query ETL',
        topics: ['Connecting to Excel, SQL, and Web sources', 'Cleaning and reshaping messy tables', 'Merging and appending queries', 'Data type conversions and transformations']
      },
      {
        title: 'Module 2: Data Modeling & Relationships',
        topics: ['Star schema vs Snowflake schema', 'Managing active & inactive relationships', 'Cardinality and cross-filter directions', 'Date tables and calendar creation']
      },
      {
        title: 'Module 3: DAX (Data Analysis Expressions)',
        topics: ['Row context vs Filter context', 'CALCULATE and FILTER deep dive', 'Time intelligence functions (YTD, QTD, MoM)', 'Dynamic measures and parameters']
      },
      {
        title: 'Module 4: Visual Design & Publishing',
        topics: ['UI/UX principles for dashboards', 'Bookmarks, drill-through, and tooltips', 'Publishing to Power BI Service', 'Scheduled refresh and gateway configuration']
      }
    ]
  },
  {
    id: 'cloud-computing',
    category: 'CLOUD COMPUTING',
    title: 'Cloud Computing',
    description:
      'Explore cloud concepts, essential services, and deployment workflows through practical guided learning.',
    price: '₹20,000',
    tone: 'green',
    image: bigDataCourseImage,
    duration: '8 Weeks',
    level: 'Beginner to Intermediate',
    rating: '4.8',
    reviewCount: 290,
    students: '1,300+',
    tools: ['AWS', 'Docker', 'Linux', 'Git', 'Nginx', 'Terraform Basics'],
    highlights: ['Cloud Architecture (VPC, EC2, S3)', 'Containerization with Docker', 'Security & IAM Best Practices', 'Deploying Web Applications'],
    modules: [
      {
        title: 'Module 1: Cloud Foundations & Linux Essentials',
        topics: ['Cloud service models (IaaS, PaaS, SaaS)', 'Public vs Private vs Hybrid clouds', 'Linux shell scripting and commands', 'SSH and server management']
      },
      {
        title: 'Module 2: AWS Compute, Storage & Networking',
        topics: ['EC2 instances and security groups', 'S3 buckets, storage classes, and lifecycle', 'Virtual Private Cloud (VPC) and subnets', 'Elastic Load Balancer (ELB) and Auto Scaling']
      },
      {
        title: 'Module 3: Containers & Modern Deployment',
        topics: ['Docker containers vs Virtual Machines', 'Writing Dockerfiles and building images', 'Docker Compose for multi-container apps', 'Deploying containers on AWS ECS']
      },
      {
        title: 'Module 4: Security, Cost & Capstone',
        topics: ['AWS IAM policies and role delegation', 'CloudWatch monitoring and alarms', 'Cost optimization strategies', 'Multi-tier web app deployment capstone']
      }
    ]
  }
]
