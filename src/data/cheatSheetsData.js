export const cheatSheetsData = [
  {
    id: 'top-50-sql-queries',
    title: 'Top 50 SQL Interview Queries',
    tag: 'MOST POPULAR',
    category: 'Database & Analytics',
    icon: '🗄️',
    downloads: '14,280+ downloads',
    description: 'Essential SQL interview questions asked by Amazon, Google, Deloitte, and top product companies. Covers window functions, CTEs, Joins, and aggregations.',
    topics: ['Window Functions', 'Self Joins', 'CTEs', 'Cumulative Sums', 'DENSE_RANK', 'Performance Tuning'],
    sections: [
      {
        heading: '1. Find the Nth / 2nd Highest Salary',
        explanation: 'Uses DENSE_RANK() to avoid skipping ranks if duplicate salaries exist.',
        code: `-- Method 1: Using CTE & DENSE_RANK()
WITH RankedSalaries AS (
    SELECT 
        employee_id,
        emp_name,
        salary,
        DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
    FROM employees
)
SELECT emp_name, salary 
FROM RankedSalaries 
WHERE salary_rank = 2;

-- Method 2: Subquery approach
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);`
      },
      {
        heading: '2. Delete Duplicate Rows While Keeping the Lowest ID',
        explanation: 'Uses ROW_NUMBER() partitioned by unique business keys to flag and delete redundant rows.',
        code: `WITH DuplicateRecords AS (
    SELECT 
        id,
        email,
        ROW_NUMBER() OVER (
            PARTITION BY email 
            ORDER BY id ASC
        ) AS row_num
    FROM users
)
DELETE FROM users 
WHERE id IN (
    SELECT id 
    FROM DuplicateRecords 
    WHERE row_num > 1
);`
      },
      {
        heading: '3. Calculate Running Total / Cumulative Sum',
        explanation: 'Computes a continuous running revenue total ordered chronologically.',
        code: `SELECT 
    order_date,
    order_amount,
    SUM(order_amount) OVER (
        ORDER BY order_date ASC
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
FROM sales_orders;`
      },
      {
        heading: '4. Find Employees Earning More Than Their Managers (Self Join)',
        explanation: 'Joins the employee table to itself on manager_id.',
        code: `SELECT 
    e.emp_name AS employee_name,
    e.salary   AS employee_salary,
    m.emp_name AS manager_name,
    m.salary   AS manager_salary
FROM employees e
INNER JOIN employees m 
    ON e.manager_id = m.employee_id
WHERE e.salary > m.salary;`
      },
      {
        heading: '5. Month-Over-Month (MoM) Growth Using LAG()',
        explanation: 'Compares the current month revenue with the immediately preceding month revenue.',
        code: `WITH MonthlySales AS (
    SELECT 
        DATE_TRUNC('month', order_date) AS sales_month,
        SUM(amount) AS total_revenue
    FROM orders
    GROUP BY 1
)
SELECT 
    sales_month,
    total_revenue,
    LAG(total_revenue, 1) OVER (ORDER BY sales_month) AS prev_month_revenue,
    ROUND(
        ((total_revenue - LAG(total_revenue, 1) OVER (ORDER BY sales_month)) 
        / LAG(total_revenue, 1) OVER (ORDER BY sales_month)) * 100, 
        2
    ) AS mom_growth_pct
FROM MonthlySales;`
      },
      {
        heading: '6. Department-Wise Top 3 Earners',
        explanation: 'Uses DENSE_RANK() with PARTITION BY department_id.',
        code: `WITH DeptRanks AS (
    SELECT 
        dept_name,
        emp_name,
        salary,
        DENSE_RANK() OVER (
            PARTITION BY dept_name 
            ORDER BY salary DESC
        ) as rank_in_dept
    FROM employees e
    JOIN departments d ON e.dept_id = d.dept_id
)
SELECT dept_name, emp_name, salary
FROM DeptRanks
WHERE rank_in_dept <= 3;`
      }
    ]
  },
  {
    id: 'data-science-roadmap',
    title: 'Data Science & GenAI Complete Roadmap',
    tag: 'UPDATED 2026',
    category: 'Artificial Intelligence',
    icon: '⚡',
    downloads: '18,940+ downloads',
    description: 'Step-by-step technical milestone roadmap from Python, Pandas & Machine Learning to Transformers, Vector DBs, RAG, and LangChain.',
    topics: ['Mathematics & Stats', 'Feature Engineering', 'Supervised ML', 'Deep Learning', 'LLMs & Embeddings', 'RAG Pipelines'],
    sections: [
      {
        heading: 'Phase 1: Foundations & Data Wrangling (Weeks 1-4)',
        explanation: 'Core Python, vector operations with NumPy, and structured data wrangling with Pandas.',
        code: `# Key Libraries to Master:
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Must-know techniques:
# 1. Handling missing values: df.fillna(), df.interpolate()
# 2. Outlier removal via IQR (Interquartile Range)
# 3. Categorical encoding: pd.get_dummies(), LabelEncoder
# 4. Feature scaling: StandardScaler, MinMaxScaler`
      },
      {
        heading: 'Phase 2: Statistical Inference & Classical ML (Weeks 5-8)',
        explanation: 'Hypothesis testing, classification, regression, clustering, and cross-validation.',
        code: `from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, roc_auc_score

# Essential workflow:
# 1. Stratified K-Fold Cross Validation
# 2. Hyperparameter optimization with GridSearchCV & Optuna
# 3. Feature importance analysis with SHAP values`
      },
      {
        heading: 'Phase 3: Production Generative AI & RAG Architecture (Weeks 9-12)',
        explanation: 'Modern Large Language Models, embeddings, vector databases, and Retrieval-Augmented Generation.',
        code: `# RAG Architecture Blueprint:
# 1. Document Loader (PDFs, Markdown, Web pages)
# 2. Text Chunker (RecursiveCharacterTextSplitter with chunk_size=500, overlap=50)
# 3. Embedding Model: text-embedding-3-small or all-MiniLM-L6-v2
# 4. Vector Store: ChromaDB / FAISS / Pinecone
# 5. Hybrid Retrieval: BM25 keyword + Semantic Dense Vector Search
# 6. LLM Generation: Claude 3.5 / GPT-4o / Llama 3 with strict system prompts`
      }
    ]
  },
  {
    id: 'aws-devops-cheat-sheet',
    title: 'AWS Cloud & DevOps Commands Cheat Sheet',
    tag: 'HANDS-ON LAB',
    category: 'Cloud Infrastructure',
    icon: '☁️',
    downloads: '11,450+ downloads',
    description: 'Quick reference sheet for AWS CLI, Docker containerization, Kubernetes kubectl syntax, and CI/CD automation pipelines.',
    topics: ['AWS S3 & EC2', 'Docker CLI', 'Kubectl', 'IAM Security', 'Linux Bash', 'CI/CD YAML'],
    sections: [
      {
        heading: '1. AWS CLI Production Commands',
        explanation: 'Daily commands for managing S3 buckets, EC2 virtual instances, and IAM credentials.',
        code: `# Sync a local production directory to S3
aws s3 sync ./dist s3://my-production-bucket --delete

# List all running EC2 instances with public IPs
aws ec2 describe-instances \\
  --filters "Name=instance-state-name,Values=running" \\
  --query "Reservations[*].Instances[*].[InstanceId,PublicIpAddress,Tags[?Key=='Name'].Value|[0]]" \\
  --output table

# Verify active AWS caller identity and role
aws sts get-caller-identity`
      },
      {
        heading: '2. Docker Production Cheatsheet',
        explanation: 'Building multi-stage containers, container management, and port mapping.',
        code: `# Multi-stage Build & Tag
docker build -t sklassics-app:v1.0 .

# Run detached container with environment variables & volume mount
docker run -d \\
  --name web-service \\
  -p 8080:80 \\
  -e NODE_ENV=production \\
  -v $(pwd)/logs:/app/logs \\
  --restart unless-stopped \\
  sklassics-app:v1.0

# Clean up unused containers, networks, and untagged images
docker system prune -af --volumes`
      },
      {
        heading: '3. Kubernetes (kubectl) Essential Commands',
        explanation: 'Cluster inspection, deploying manifests, streaming pod logs, and scaling deployments.',
        code: `# Apply declarative cluster configuration
kubectl apply -f deployment.yaml

# Inspect all pods across namespaces with node assignment
kubectl get pods -o wide -A

# Stream live container logs for debugging
kubectl logs -f deployment/backend-api --tail=100

# Scale deployment replicas horizontally
kubectl scale deployment/backend-api --replicas=5

# Execute interactive shell inside running container
kubectl exec -it <pod-name> -- /bin/sh`
      }
    ]
  },
  {
    id: 'python-interview-guide',
    title: 'Python for Tech Interviews & Clean Code',
    tag: 'FREE GUIDE',
    category: 'Programming',
    icon: '🐍',
    downloads: '16,720+ downloads',
    description: 'Master time/space complexity, collections module, generators, decorators, and high-frequency technical interview algorithms.',
    topics: ['Big-O Notation', 'collections.defaultdict', 'Generators & Yield', 'Decorators', 'Two-Pointer Technique'],
    sections: [
      {
        heading: '1. Two-Pointer Technique (Optimal Two Sum in Sorted Array)',
        explanation: 'Solves sorted array pair matching in O(N) time and O(1) space instead of O(N^2).',
        code: `def two_sum_sorted(numbers, target):
    left, right = 0, len(numbers) - 1
    
    while left < right:
        curr_sum = numbers[left] + numbers[right]
        if curr_sum == target:
            return [left + 1, right + 1]  # 1-indexed
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
            
    return []  # No solution found`
      },
      {
        heading: '2. Python Memory-Saving Generators (yield)',
        explanation: 'Generators yield one item at a time, preventing Out-Of-Memory (OOM) crashes on large datasets.',
        code: `def stream_large_dataset(filepath):
    """Streams file line-by-line without loading entire 10GB file into RAM."""
    with open(filepath, 'r', encoding='utf-8') as f:
        for line in f:
            if line.strip():
                yield line.strip().split(',')

# Usage consumes constant O(1) memory:
for row in stream_large_dataset('massive_logs.csv'):
    process_row(row)`
      },
      {
        heading: '3. Custom Decorator with Timing & Arguments',
        explanation: 'Measures execution time of any function without modifying its internal logic.',
        code: `import time
from functools import wraps

def time_it(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        duration = time.perf_counter() - start
        print(f"⚡ [TIMING] {func.__name__} took {duration:.4f} seconds")
        return result
    return wrapper

@time_it
def compute_heavy_task():
    return sum(i * i for i in range(1_000_000))`
      }
    ]
  }
]
