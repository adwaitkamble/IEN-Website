export interface TeamMember {
  name: string;
  designation: string;
  role: string;
  isHighlight?: boolean;
}

export const IEN_CORE_LEADERSHIP: TeamMember[] = [
  { 
    name: 'Dr. Rajani P. K.', 
    role: 'President, IIC', 
    designation: 'Dean, IEN & Associate Professor, E&TC Engineering' 
  },
  { 
    name: 'Dr. Mubin Tamboli', 
    role: 'Vice President, IIC | ARIIA Coordinator', 
    designation: 'Associate Dean, IEN & Associate Professor, Computer Engineering' 
  },
  { 
    name: 'Prof. Ajay S. Gaadhe', 
    role: 'Convener, IIC', 
    designation: 'Associate Dean, IEN & Assistant Professor, E&TC Engineering' 
  },
];

export const IIC_TEAM: TeamMember[] = [
  { name: 'Dr. V. K. Harpale', designation: 'Faculty Coordinator', role: 'Member' },
  { name: 'Dr. Srinivas Ambala', designation: 'Faculty Coordinator', role: 'Member' },
  { name: 'Dr. Abhay B. Lingayat', designation: 'Faculty Coordinator', role: 'Member' },
  { name: 'Dr. Jaya Goyal', designation: 'Faculty Coordinator', role: 'Member' },
  { name: 'Dr. Ketan Desale', designation: 'Faculty Coordinator', role: 'Member' },
];

export const IPR_TEAM: TeamMember[] = [
  { name: 'Dr. Ujwal R. Shirode', designation: 'IPR Cell Member', role: 'Member' },
  { name: 'Dr. Pankaj R. Mali', designation: 'IPR Cell Member', role: 'Member' },
  { name: 'Mrs. S. A. Patil', designation: 'IPR Cell Member', role: 'Member' },
  { name: 'Dr. Mahadev Kadam', designation: 'IPR Cell Member', role: 'Member' },
  { name: 'Mrs. Smita Khairnar', designation: 'IPR Cell Member', role: 'Member' },
  { name: 'Ms. Rucha Shinde', designation: 'IPR Cell Member', role: 'Member' },
  { name: 'Dr. Jyoti Kulkarni', designation: 'IPR Cell Member', role: 'Member' },
  { name: 'Dr. Maya Bembade', designation: 'IPR Cell Member', role: 'Member' },
  { name: 'Dr. Rahul A. Gujar', designation: 'IPR Cell Member', role: 'Member' },
  { name: 'Dr. Amol Kharache', designation: 'IPR Cell Member', role: 'Member' },
  { name: 'Dr. Avinash Chormale', designation: 'IPR Cell Member', role: 'Member' },
];

export const CIIL_TEAM: TeamMember[] = [
  { 
    name: 'Ms. Archana Pachankar', 
    role: 'Chief Executive Officer – PCCOE CIIL', 
    designation: 'Leadership',
    isHighlight: true 
  },
];

export const STUDENTS_TEAM: TeamMember[] = [
  {
    name: 'Ritik Lipate',
    role: 'President IEN',
    designation: 'EnTC Department',
    isHighlight: true
  },
  {
    name: 'Miss. Ishani Soundankar',
    role: 'Vice President IEN',
    designation: 'EnTC Department'
  },
  {
    name: 'Mr. Jayesh Patil',
    role: 'Convenor IEN',
    designation: 'AIML Department'
  },
  {
    name: 'Mr. Shreyash Kadam',
    role: 'Secretary IEN',
    designation: 'EnTC Department'
  }
];
