-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar_url" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "google_uid" TEXT NOT NULL,
    "college_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Socials" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Socials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CinkodAdmin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar_url" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "google_uid" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CinkodAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollegeAdmin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "google_uid" TEXT,
    "phone" TEXT NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isAdminstrator" BOOLEAN NOT NULL,
    "isCoreTeam" BOOLEAN NOT NULL,
    "isLead" BOOLEAN NOT NULL,
    "isMember" BOOLEAN NOT NULL,

    CONSTRAINT "CollegeAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner_url" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "maxSlots" INTEGER NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "College" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "leadId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "banner_url" TEXT NOT NULL,
    "members_count" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "photos" TEXT[],
    "videos" TEXT[],
    "socials" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner_url" TEXT NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "upvotes" INTEGER NOT NULL,
    "shares" INTEGER NOT NULL,
    "views" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "blogId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventRegisteration" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventRegisteration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollegeMember" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "isCore" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CollegeMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Core_team_members" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_google_uid_key" ON "User"("google_uid");

-- CreateIndex
CREATE UNIQUE INDEX "CinkodAdmin_email_key" ON "CinkodAdmin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CinkodAdmin_user_name_key" ON "CinkodAdmin"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "CinkodAdmin_google_uid_key" ON "CinkodAdmin"("google_uid");

-- CreateIndex
CREATE UNIQUE INDEX "CollegeAdmin_email_key" ON "CollegeAdmin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CollegeAdmin_user_name_key" ON "CollegeAdmin"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "CollegeAdmin_google_uid_key" ON "CollegeAdmin"("google_uid");

-- CreateIndex
CREATE UNIQUE INDEX "College_name_key" ON "College"("name");

-- CreateIndex
CREATE UNIQUE INDEX "College_email_key" ON "College"("email");

-- CreateIndex
CREATE UNIQUE INDEX "College_leadId_key" ON "College"("leadId");

-- CreateIndex
CREATE UNIQUE INDEX "EventRegisteration_userId_eventId_key" ON "EventRegisteration"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "CollegeMember_userId_collegeId_key" ON "CollegeMember"("userId", "collegeId");

-- CreateIndex
CREATE UNIQUE INDEX "_Core_team_members_AB_unique" ON "_Core_team_members"("A", "B");

-- CreateIndex
CREATE INDEX "_Core_team_members_B_index" ON "_Core_team_members"("B");

-- AddForeignKey
ALTER TABLE "Socials" ADD CONSTRAINT "Socials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollegeAdmin" ADD CONSTRAINT "CollegeAdmin_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "College" ADD CONSTRAINT "College_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRegisteration" ADD CONSTRAINT "EventRegisteration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRegisteration" ADD CONSTRAINT "EventRegisteration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollegeMember" ADD CONSTRAINT "CollegeMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollegeMember" ADD CONSTRAINT "CollegeMember_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Core_team_members" ADD CONSTRAINT "_Core_team_members_A_fkey" FOREIGN KEY ("A") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Core_team_members" ADD CONSTRAINT "_Core_team_members_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
