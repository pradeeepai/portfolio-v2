// All site content lives in this file. Edit here; the components only render it.

export const profile = {
  name: 'Pradeep',
  role: 'Senior DevOps Engineer',
  lead: [
    'I build and operate AWS infrastructure for software teams.',
    'I move legacy applications to containers, automate deployments, and reduce monthly AWS cost.',
  ],
  plate: [
    { label: 'Role', value: 'Senior DevOps Engineer' },
    { label: 'Experience', value: '5+ years' },
    { label: 'Cloud', value: 'AWS' },
    { label: 'Certification', value: 'Solutions Architect – Professional' },
    { label: 'Engagement', value: 'Freelance, remote' },
  ],
};

// Empty values are not rendered. Add a value to show the link in the Contact section.
export const contact = {
  email: '',
  upwork: '',
  linkedin: '',
  github: 'https://github.com/pradeeepai',
};

export const caseStudy = {
  title: 'Legacy Rails application: EC2 to Amazon ECS',
  meta: [
    { label: 'Client', value: 'CRM SaaS company' },
    { label: 'Effort', value: '40–50 hours' },
    { label: 'Stack', value: 'Ruby 2.2, Rails 3.2, Sidekiq, MariaDB 10.3' },
  ],
  context: [
    'The client ran a Ruby on Rails 3.2 application directly on large EC2 instances.',
    'The application had no containers, and each deploy was a manual step on the server.',
    'The instances were larger than the workload required. The AWS bill was approximately $1,800 per month.',
  ],
  work: [
    'Containerized the Rails application and its Sidekiq background workers with Docker.',
    'Deployed the containers to Amazon ECS with the EC2 launch type.',
    'Replaced the over-provisioned instances with right-sized EC2 instances for the ECS cluster.',
    'Kept the two MariaDB database servers on EC2 without change. This removed data-migration risk from the project.',
  ],
  decision:
    'EKS adds cluster operations that one Rails application does not need. Lambda requires changes that a Rails 3.2 application cannot easily support. ECS with the EC2 launch type runs the existing application in containers and keeps instance sizing under direct control.',
  diff: [
    { op: '-', key: 'app runtime', value: 'EC2, no containers, manual deploys' },
    { op: '+', key: 'app runtime', value: 'Docker on Amazon ECS (EC2 launch type)' },
    { op: '-', key: 'instance sizing', value: 'over-provisioned' },
    { op: '+', key: 'instance sizing', value: 'right-sized for the workload' },
    { op: '~', key: 'database', value: 'MariaDB 10.3 on EC2 (unchanged)' },
    { op: '-', key: 'monthly cost', value: '$1,800' },
    { op: '+', key: 'monthly cost', value: '$800' },
  ],
  costBefore: 1800,
  costAfter: 800,
  nextSteps: [
    {
      issue: 'Large export jobs in Sidekiq 2.17 can use all worker memory and block other jobs.',
      fix: 'Move exports to a dedicated queue with a concurrency limit. Set memory limits on the Sidekiq ECS tasks.',
    },
    {
      issue: 'Export queries do full table scans on MariaDB.',
      fix: 'Run EXPLAIN on the slow queries, add composite indexes, and send reporting queries to a read replica.',
    },
  ],
};

export const services = [
  {
    area: 'AWS infrastructure',
    work: 'Design and right-size network, compute, and managed services for production workloads.',
    tools: ['ECS Fargate', 'EKS', 'Lambda', 'RDS Aurora', 'CloudFront', 'ALB', 'S3', 'Secrets Manager'],
  },
  {
    area: 'CI/CD',
    work: 'Build pipelines that test, build, and deploy the application on each merge.',
    tools: ['GitHub Actions', 'AWS CodePipeline', 'Jenkins'],
  },
  {
    area: 'Infrastructure as code',
    work: 'Define infrastructure in version-controlled code that the team can review and reproduce.',
    tools: ['Terraform', 'CloudFormation'],
  },
  {
    area: 'Containers',
    work: 'Package applications as images and run them on ECS or Kubernetes.',
    tools: ['Docker', 'Kubernetes', 'Amazon ECS'],
  },
  {
    area: 'Monitoring',
    work: 'Set up metrics, dashboards, and alerts that page the on-call engineer.',
    tools: ['CloudWatch', 'Grafana', 'PagerDuty'],
  },
  {
    area: 'Security',
    work: 'Apply least-privilege IAM, network isolation, OS hardening, and secret rotation.',
    tools: ['IAM', 'VPC', 'Security groups', 'Ubuntu hardening', 'Secrets rotation'],
  },
  {
    area: 'Databases',
    work: 'Run MySQL-compatible databases with Multi-AZ failover and automated backups.',
    tools: ['MySQL', 'MariaDB', 'Aurora', 'RDS Multi-AZ'],
  },
];

export const steps = [
  { step: 'Discovery', detail: 'Review the current setup, cost, and goals. Agree on the target architecture.' },
  { step: 'Infrastructure', detail: 'Build the network, compute, and data layers as code.' },
  { step: 'Deployment', detail: 'Containerize the application and deploy it to the new platform.' },
  { step: 'CI/CD', detail: 'Automate build, test, and release for each merge.' },
  { step: 'Monitoring and security', detail: 'Add dashboards, alerts, and hardening.' },
  { step: 'Handover', detail: 'Deliver documentation and runbooks to the team.' },
];

// verifyUrl is optional. Leave it empty until the Credly badge URL is confirmed.
export const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Professional',
    verifyUrl: 'https://www.credly.com/badges/24fd49bf-4690-464e-8486-17365e69b740/public_url',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    verifyUrl: 'https://www.credly.com/badges/5c3bc431-dfb7-4c85-9872-5d75b70c1bac/public_url',
  },
  {
    name: 'AWS Certified AI Practitioner',
    verifyUrl: '',
  },
];
