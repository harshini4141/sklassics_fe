export const assessmentTracks = [
  {
    id: 'python',
    title: 'Python Programming',
    icon: '🐍',
    badge: 'Core Programming',
    description: 'Test your understanding of Python syntax, data structures, and functional features.',
    recommendedCourse: 'Python for Data Beginners & Developers',
    courseId: 'python-programming',
    questions: [
      {
        id: 1,
        question: 'Which of the following data structures in Python is immutable?',
        options: [
          'List [1, 2, 3]',
          'Dictionary {"a": 1}',
          'Tuple (1, 2, 3)',
          'Set {1, 2, 3}'
        ],
        correctAnswer: 2,
        explanation: 'Tuples cannot be altered after creation (immutable), unlike lists, dictionaries, and sets which can be mutated in-place.'
      },
      {
        id: 2,
        question: 'What is the output of: [x * 2 for x in range(4) if x % 2 == 0]?',
        options: [
          '[0, 4]',
          '[0, 2, 4]',
          '[2, 6]',
          '[0, 1, 2, 3]'
        ],
        correctAnswer: 0,
        explanation: 'range(4) produces 0, 1, 2, 3. The even numbers are 0 and 2. Multiplying them by 2 yields [0, 4].'
      },
      {
        id: 3,
        question: 'How do you safely access a key in a Python dictionary without throwing a KeyError if the key is missing?',
        options: [
          'my_dict[key]',
          'my_dict.get(key, default)',
          'my_dict.lookup(key)',
          'my_dict.fetch(key)'
        ],
        correctAnswer: 1,
        explanation: '.get(key, default) returns default (or None) instead of raising a KeyError when the key does not exist.'
      },
      {
        id: 4,
        question: 'What does *args and **kwargs allow a function to accept?',
        options: [
          'Only integers and strings respectively',
          'Arbitrary positional arguments (*args) and keyword arguments (**kwargs)',
          'Global variables and local variables',
          'Pointers and memory addresses'
        ],
        correctAnswer: 1,
        explanation: '*args unpacks an arbitrary number of positional arguments into a tuple, while **kwargs unpacks keyword arguments into a dictionary.'
      },
      {
        id: 5,
        question: 'What keyword is used in Python to create an anonymous inline function?',
        options: [
          'def',
          'func',
          'lambda',
          'inline'
        ],
        correctAnswer: 2,
        explanation: 'The lambda keyword defines small anonymous functions inline, frequently used with map(), filter(), and sorted().'
      }
    ]
  },
  {
    id: 'sql',
    title: 'SQL & Database Engineering',
    icon: '🗄️',
    badge: 'Data & Analytics',
    description: 'Assess query logic, joins, aggregations, and analytical window functions.',
    recommendedCourse: 'Data Analytics & Power BI Bootcamp',
    courseId: 'data-analytics',
    questions: [
      {
        id: 1,
        question: 'What is the primary difference between WHERE and HAVING clauses in SQL?',
        options: [
          'WHERE filters groups, HAVING filters rows',
          'WHERE filters rows before aggregation, HAVING filters aggregated groups',
          'HAVING can only be used with SELECT *',
          'There is no difference; they are interchangeable'
        ],
        correctAnswer: 1,
        explanation: 'WHERE filters individual records before any GROUP BY aggregation takes place. HAVING filters groups after aggregation.'
      },
      {
        id: 2,
        question: 'Which JOIN returns all rows from the left table and matching rows from the right table, filling unmatched right columns with NULL?',
        options: [
          'INNER JOIN',
          'RIGHT JOIN',
          'LEFT OUTER JOIN',
          'FULL OUTER JOIN'
        ],
        correctAnswer: 2,
        explanation: 'LEFT JOIN (or LEFT OUTER JOIN) preserves every record from the left table and fills in NULLs where no match exists on the right.'
      },
      {
        id: 3,
        question: 'Which window function produces sequential ranking without leaving gaps for duplicate values (e.g., 1, 2, 2, 3)?',
        options: [
          'RANK()',
          'DENSE_RANK()',
          'ROW_NUMBER()',
          'NTILE()'
        ],
        correctAnswer: 1,
        explanation: 'DENSE_RANK() assigns consecutive rank numbers without skipping, whereas RANK() leaves gaps (e.g., 1, 2, 2, 4).'
      },
      {
        id: 4,
        question: 'Which SQL statement is used to find duplicate email addresses in a "users" table?',
        options: [
          'SELECT email FROM users WHERE COUNT(email) > 1;',
          'SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;',
          'SELECT DISTINCT email FROM users;',
          'SELECT email FROM users ORDER BY COUNT(*) DESC;'
        ],
        correctAnswer: 1,
        explanation: 'You must group by the target column and filter aggregated counts with HAVING COUNT(*) > 1.'
      },
      {
        id: 5,
        question: 'What is the primary trade-off of creating database indexes on a table?',
        options: [
          'Speeds up SELECT queries but slows down INSERT, UPDATE, and DELETE operations',
          'Deletes duplicate rows automatically',
          'Makes data read-only',
          'Decreases storage size of the table'
        ],
        correctAnswer: 0,
        explanation: 'Indexes create B-Tree/Hash lookup structures that accelerate read queries, but every write (INSERT/UPDATE/DELETE) must also update the index.'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps Foundations',
    icon: '☁️',
    badge: 'Infrastructure',
    description: 'Check core concepts in AWS cloud architecture, containerization, and CI/CD.',
    recommendedCourse: 'Cloud Computing & DevOps Engineering',
    courseId: 'cloud-computing',
    questions: [
      {
        id: 1,
        question: 'Which cloud computing model offers on-demand virtual machines and raw storage where the user manages the OS and runtime?',
        options: [
          'SaaS (Software as a Service)',
          'PaaS (Platform as a Service)',
          'IaaS (Infrastructure as a Service)',
          'FaaS (Function as a Service)'
        ],
        correctAnswer: 2,
        explanation: 'IaaS (such as AWS EC2 or Azure VMs) provides raw compute/storage resources where you manage the OS, software patches, and runtimes.'
      },
      {
        id: 2,
        question: 'How do Docker containers differ fundamentally from traditional Virtual Machines (VMs)?',
        options: [
          'Containers include their own hypervisor and full guest operating system',
          'Containers share the host OS kernel and are lightweight, while VMs run full guest OS instances',
          'Containers cannot connect to networks',
          'Containers only run Python code'
        ],
        correctAnswer: 1,
        explanation: 'Containers share the host operating system kernel, making them start in seconds with minimal memory overhead compared to full guest OS VMs.'
      },
      {
        id: 3,
        question: 'In AWS, which service provides virtually unlimited object storage designed for 99.999999999% (11 9s) durability?',
        options: [
          'Amazon EBS',
          'Amazon S3',
          'Amazon EFS',
          'Amazon RDS'
        ],
        correctAnswer: 1,
        explanation: 'Amazon Simple Storage Service (S3) is an object storage system architected for 99.999999999% data durability across multiple availability zones.'
      },
      {
        id: 4,
        question: 'What is the core purpose of a CI/CD pipeline in modern software delivery?',
        options: [
          'To eliminate the need for version control',
          'To automatically build, test, and safely deploy code updates to production',
          'To replace backend servers with static files',
          'To monitor employee working hours'
        ],
        correctAnswer: 1,
        explanation: 'Continuous Integration / Continuous Delivery automates integration, automated testing, container packaging, and production deployments.'
      },
      {
        id: 5,
        question: 'What is "Horizontal Scaling" (Scaling Out)?',
        options: [
          'Adding more CPU or RAM to an existing single machine',
          'Adding more machine instances behind a load balancer to distribute traffic',
          'Deleting old log files',
          'Migrating from SQL to NoSQL'
        ],
        correctAnswer: 1,
        explanation: 'Horizontal scaling (Scale Out) adds additional nodes/instances to handle increased traffic, whereas Vertical scaling (Scale Up) increases the size of one node.'
      }
    ]
  },
  {
    id: 'ai',
    title: 'Data Science & GenAI',
    icon: '⚡',
    badge: 'Cutting-Edge AI',
    description: 'Evaluate machine learning fundamentals, embeddings, LLMs, and RAG architectures.',
    recommendedCourse: 'Data Science & Generative AI Masterclass',
    courseId: 'data-science-gen-ai',
    questions: [
      {
        id: 1,
        question: 'Which machine learning paradigm uses labeled training data consisting of input features and ground-truth targets?',
        options: [
          'Unsupervised Learning',
          'Supervised Learning',
          'Reinforcement Learning',
          'Self-Supervised Clustering'
        ],
        correctAnswer: 1,
        explanation: 'Supervised learning trains algorithms on input-output pairs with known labels (e.g. classification and regression).'
      },
      {
        id: 2,
        question: 'When a model achieves 99% accuracy on training data but drops to 60% on unseen test data, what is this called?',
        options: [
          'Underfitting',
          'Overfitting (High Variance)',
          'High Bias',
          'Data Drift'
        ],
        correctAnswer: 1,
        explanation: 'Overfitting occurs when a model memorizes noise in the training set rather than learning generalized patterns, failing on new test data.'
      },
      {
        id: 3,
        question: 'In Generative AI, what is a "Vector Embedding"?',
        options: [
          'A compressed ZIP file of source code',
          'A dense numerical array representing semantic meaning in multi-dimensional space',
          'A relational database foreign key',
          'An encrypted password hash'
        ],
        correctAnswer: 1,
        explanation: 'Vector embeddings map words, sentences, or images into dense numerical vectors where semantically similar items reside close together.'
      },
      {
        id: 4,
        question: 'What does RAG stand for in enterprise LLM architectures?',
        options: [
          'Rapid Application Generation',
          'Retrieval-Augmented Generation',
          'Randomized Adaptive Gradients',
          'Recursive Algorithm Gateway'
        ],
        correctAnswer: 1,
        explanation: 'Retrieval-Augmented Generation (RAG) fetches relevant documents from a vector store to ground the LLM with up-to-date, factual context.'
      },
      {
        id: 5,
        question: 'Which metric is most critical when evaluating a medical diagnostic test where missing a disease (false negative) is catastrophic?',
        options: [
          'Precision',
          'Recall (Sensitivity)',
          'Accuracy',
          'Silhouette Score'
        ],
        correctAnswer: 1,
        explanation: 'Recall measures the fraction of actual positive cases successfully caught. High recall ensures minimal false negatives.'
      }
    ]
  }
]
