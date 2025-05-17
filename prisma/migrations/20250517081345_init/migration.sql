-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('pending', 'scheduled', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "PickupStatus" AS ENUM ('scheduled', 'in_progress', 'done', 'missed');

-- CreateEnum
CREATE TYPE "ComplaintStatus" AS ENUM ('open', 'in_review', 'resolved');

-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('admin', 'resident');

-- CreateTable
CREATE TABLE "Role" (
    "role_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" "RoleType" NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "barangay_id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "WasteType" (
    "waste_type_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "WasteType_pkey" PRIMARY KEY ("waste_type_id")
);

-- CreateTable
CREATE TABLE "ServiceRequest" (
    "request_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "waste_type_id" INTEGER NOT NULL,
    "requested_date" TIMESTAMP(3) NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'pending',

    CONSTRAINT "ServiceRequest_pkey" PRIMARY KEY ("request_id")
);

-- CreateTable
CREATE TABLE "Pickup" (
    "pickup_id" SERIAL NOT NULL,
    "request_id" INTEGER NOT NULL,
    "scheduled_date" TIMESTAMP(3) NOT NULL,
    "route_id" INTEGER,
    "status" "PickupStatus" NOT NULL DEFAULT 'scheduled',
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pickup_pkey" PRIMARY KEY ("pickup_id")
);

-- CreateTable
CREATE TABLE "Route" (
    "route_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("route_id")
);

-- CreateTable
CREATE TABLE "RouteAssignment" (
    "assignment_id" SERIAL NOT NULL,
    "route_id" INTEGER NOT NULL,
    "pickup_id" INTEGER NOT NULL,
    "sequence_no" INTEGER NOT NULL,

    CONSTRAINT "RouteAssignment_pkey" PRIMARY KEY ("assignment_id")
);

-- CreateTable
CREATE TABLE "Complaint" (
    "complaint_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "pickup_id" INTEGER,
    "description" TEXT NOT NULL,
    "status" "ComplaintStatus" NOT NULL DEFAULT 'open',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("complaint_id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "notification_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_read" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("notification_id")
);

-- CreateTable
CREATE TABLE "WasteLog" (
    "log_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "waste_type_id" INTEGER NOT NULL,
    "quantity_kg" DECIMAL(6,2) NOT NULL,
    "log_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WasteLog_pkey" PRIMARY KEY ("log_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "RouteAssignment_route_id_key" ON "RouteAssignment"("route_id");

-- CreateIndex
CREATE UNIQUE INDEX "RouteAssignment_pickup_id_key" ON "RouteAssignment"("pickup_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRequest" ADD CONSTRAINT "ServiceRequest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRequest" ADD CONSTRAINT "ServiceRequest_waste_type_id_fkey" FOREIGN KEY ("waste_type_id") REFERENCES "WasteType"("waste_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pickup" ADD CONSTRAINT "Pickup_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "ServiceRequest"("request_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pickup" ADD CONSTRAINT "Pickup_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "Route"("route_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteAssignment" ADD CONSTRAINT "RouteAssignment_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "Route"("route_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RouteAssignment" ADD CONSTRAINT "RouteAssignment_pickup_id_fkey" FOREIGN KEY ("pickup_id") REFERENCES "Pickup"("pickup_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_pickup_id_fkey" FOREIGN KEY ("pickup_id") REFERENCES "Pickup"("pickup_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WasteLog" ADD CONSTRAINT "WasteLog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WasteLog" ADD CONSTRAINT "WasteLog_waste_type_id_fkey" FOREIGN KEY ("waste_type_id") REFERENCES "WasteType"("waste_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
