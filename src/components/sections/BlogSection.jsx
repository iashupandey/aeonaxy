import React, { useState } from "react";
import Filter from "../Filter";
import AvatarDetails from "../AvatarDetails";
import Card from "../Card";
import BlogPost from "../BlogPost";
import Newsletter from "./Newsletter";
import Pagination from "../Pagination";
import SpecialCard from "../SpecialCard";

export default function BlogSection() {
  const filters = ["All articles", "Company", "Engineering", "Growth"];

  const blogs1 = [
    {
      imgSrc: "/posts/post1.jpg",
      type: "Company",
      title: "Here at RevenueCat, Employees are Customers Too",
      description: "Sharing app building ideas in our Employee App Club",
      avatarImg: "/avatar/Ellipse.png",
      name: "Thomas Petit",
      created_at: "June 07, 2022",
    },

    {
      imgSrc: "/posts/post3.jpg",
      type: "Growth",
      title: "App Store Optimization Guide for Subscription Apps",
      description: "Learn how to boost your app's visibility and more",
      avatarImg: "/avatar/Ellipse.png",
      name: "Thomas Kriebernegg",
      created_at: "May 30, 2022",
    },
    {
      imgSrc: "/posts/post4.jpg",
      type: "Engineering",
      title: "Account deletion rules on the App Store",
      description: "Everything you need to know about the new rule",
      avatarImg: "/avatar/Ellipse.png",
      name: "Corey Rabazinski",
      created_at: "May 26, 2022",
    },
    {
      imgSrc: "/posts/post5.jpg",
      type: "Company",
      title: "How We Work Remotely at RevenueCat",
      description: "We're a little different than your average 9-5 job",
      avatarImg: "/avatar/Ellipse2.png",
      name: "Rechel Wright",
      created_at: "May 07, 2022",
    },
    {
      imgSrc: "/posts/post6.jpg",
      type: "Engineering",
      title: "Google I/O 2022 Announcements",
      description: "How the new features and updated Play Console will help grow your app business",
      avatarImg: "/avatar/Ellipse3.png",
      name: "Maddie Beyl",
      created_at: "May 07, 2022",
    },
    {
      imgSrc: "/posts/subclub.png",
      type: "Special",
      title: "The Sub Club Podcast",
      description:
        "Interviews and deep dives with the experts behind the biggest apps in the world.",
    },
  ];
  const blogs2 = [
    {
      imgSrc: "/posts/post1.jpg",
      type: "Company",
      title: "Meet the New RevenueCat SDK",
      description: "Our biggest release to date!",
      avatarImg: "/avatar/Ellipse.png",
      name: "Andy Boedo",
      created_at: "June 07, 2022",
    },
    {
      imgSrc: "/posts/post2.jpg",
      type: "Engineering",
      title: "Using RevenueCat with Expo's Managed Workflow",
      description: "The getting started guide",
      avatarImg: "/avatar/Ellipse3.png",
      name: "Josh Holtz",
      created_at: "April 18, 2022",
    },
    {
      imgSrc: "/posts/post7.png",
      type: "Engineering",
      title: "How we test SDKs at RevesueCat",
      description: "All about testing and updating our iOS SDK",
      avatarImg: "/avatar/Ellipse2.png",
      name: "Andy Boedo",
      created_at: "May 26, 2022",
    },
  ];
  const blogs3 = [
    {
      imgSrc: "/posts/post9.jpg",
      type: "Growth",
      title: "Early Stage Subscription App Growth Stack",
      description: "A scaled-down 'MVP' of the mobile growth stack to help mobile developers get started",
      avatarImg: "/avatar/Ellipse.png",
      name: "Andy Boedo",
      created_at: "June 07, 2022",
    },
    {
      imgSrc: "/posts/post2.jpg",
      type: "Growth",
      title: "How all Trails Leveraged Product Channel fit To Scale its Subscription",
      description: "Growth and investment takeways from a profitable app",
      avatarImg: "/avatar/Ellipse3.png",
      name: "Josh Holtz",
      created_at: "April 18, 2022",
    },
    {
      imgSrc: "/posts/post10.jpg",
      type: "Engineering",
      title: "Hybrid SDK Achitecture at RevenueCat",
      description: "Adding a layer to reduce complexity.",
      avatarImg: "/avatar/Ellipse2.png",
      name: "Maddie Beyl",
      created_at: "March 15, 2023",
    },
  ];
  return (
    <main className="max-w-7xl mx-auto  py-16 w-full ">
      <Filter filters={filters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 px-4 sm:px-6 lg:px-8">
        {/* {blogs1.map((blog, index) => (
          <Card data={blog} />
        ))} */}
        {blogs1.map((blog, index) =>
          blog.type === "Special" ? (
            <SpecialCard data={blog} />
          ) : (
            <Card data={blog} />
          )
        )}
      </div>

      <BlogPost
        imgSrc="/blogpost/firebaseExt.jpg"
        type="Engineering"
        title="Introducing our Firebase Extension"
        description="Firebase developers get plug and play in-app purchase infrastructure"
        avatarImg="/avatar/Ellipse.png"
        name="Francie Fernandes"
        created_at="May 11, 2022"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 px-4 sm:px-6 lg:px-8">
        {blogs2.map((blog, index) => (
          <Card data={blog} />
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 px-4 sm:px-6 lg:px-8">
        {blogs3.map((blog, index) => (
          <Card data={blog} />
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <Pagination />
      </div>
    </main>
  );
}
