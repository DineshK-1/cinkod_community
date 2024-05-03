export type User = {
    id: number;
    email: string;
    name: string | null;
    avatar_url: string;
    user_name: string;
    google_uid: string;
    college_name: string;
    phone: string;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
};

export type NotRegisteredUser = {
    not_registered: boolean;
};

export type LoggedInCollegeAdmin = {
    accessToken: string;
    email: string;
    name: string;
    user_name: string;
    google_uid: string;
    phone: string;
    collegeId: number;
    isAdminstrator: boolean;
    isLead: boolean;
    isCoreTeam: boolean;
    isMember: boolean;
};

export type CollegeAdmin = {
    id: number;
    email: string;
    name: string;
    user_name: string;
    google_uid: string;
    phone: string;
    college: College;
    collegeId: number;
    isAdminstrator: boolean;
    isLead: boolean;
    isCoreTeam: boolean;
    isMember: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export type College = {
    id: number;
    name: string;
    email: string;
    leadId: number;
    description: string;
    banner_url: string;
    members_count: number;
    region: string;
    photos: string[];
    videos: string[];
    socials: string[];
    createdAt: Date;
    updatedAt: Date;
};

export type CollegeEvent = {
    id: number;
    banner_url: string;
    name: string;
    description: string;
    venue: string;
    from: Date;
    to: Date;
    maxSlots: number;
    college: College;
    collegeId: number;
    createdAt: Date;
    updatedAt: Date;
};

export type Event = {
    id: number;
    name: string;
    description: string;
    banner_url: string;
    venue: string;
    from: Date;
    to: Date;
    maxSlots: number;
    createdAt: Date;
    updatedAt: Date;
};

export type Blog = {
    id: number;
    title: string;
    description: string;
    banner_url: string;
    collegeId: number;
    upvotes: number;
    shares: number;
    views: number;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
    comments: Comment[];
};
