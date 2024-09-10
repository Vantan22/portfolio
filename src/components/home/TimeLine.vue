<script lang="ts" setup>
  import { ref } from "vue";
  import Heading from "@/components/common/Heading.vue";

  const timelineArr = ref([
    {
      isCollapsed: false,
      year: "2023 - 2024",
      title: "Frontend Developer",
      list: [
        {
          date: "6/2024 – Now",
          iconColor: "green",
          chipColor: "#26C",
          chipText: "Personal Project",
          subTitleColor: "#ec6a13",
          subTitle: "Simple Task",
          content: `Simple Task is a lightweight and efficient task management system designed to help users organize and track their daily tasks with ease. Built using modern technologies such as React, Vite, Node.js, and MongoDB, it offers a fast and intuitive user experience. The system allows users to create, manage, and prioritize tasks, ensuring better productivity and organization. With real-time updates and a clean interface, Simple Task provides a seamless workflow for individuals and teams alike.`
        },
        {
          date: "01/2023 – 4/2024",
          iconColor: "green",
          chipColor: "#26C",
          chipText: "Samsung SDS",
          subTitleColor: "#ec6a13",
          subTitle: "Sally",
          content: `Sally is a Digital Transformation Assessment (DTA) tools for customers. It provides a simple survey for users and serves a simple assessment result. And It supports marketing campaigns to collect and manager customer data.`
        },
        {
          date: "1/2023 - 4/2023",
          iconColor: "#fa1",
          chipColor: "#26C",
          chipText: "Personal Project",
          subTitleColor: "#ec6a13",
          subTitle: "Passo",
          content: `Passo is a marketing agency platform that offers customizable templates and on-demand design services. It provides a seamless experience for businesses looking to enhance their branding and digital presence, with flexible solutions for template purchases and design rentals`
        },
        {
          date: "1/2023 - 4/2023",
          iconColor: "#fa1",
          chipColor: "#26C",
          chipText: "Personal Project",
          subTitleColor: "#ec6a13",
          subTitle: "Social Project",
          content: `The Social Network Platform, built with React.js and Firebase, enables users to connect, share, and engage in real-time. It supports instant messaging, media sharing, and profile management, with Firebase providing fast, secure data storage and authentication`
        }
      ]
    },
    {
      isCollapsed: false,
      year: "2022 - 2023",
      title: "Frontend Developer",
      list: [
        {
          date: "08/2022 – 12/2022",
          chipText: "CMC Global",
          subTitle: "Monoly",
          content: `MONOLY is a project about managing task and communication, includes three functions below:
Discussion: Multi-party Communication
Cross-company business communication becomes more private, more concise, and faster.
eSignature: Electronic Document Signing
Confidentiality is guaranteed as an agreement is shared only between interested parties.
Drive: Secure File Sharing & Storage
Share files with anyone without worrying about security and compliance violations.
`
        }
      ]
    },
    {
      isCollapsed: false,
      year: "2019 - Now",
      title: "Content Creator",
      list: [
        {
          date: "31/8/2019",
          chipText: "1977Vlog",
          subTitle: "Actor",
          content: `<a href='projects.vue'>https://www.1977vlog.com</a>`
        }
      ]
    }
  ]);
</script>

<template>
  <div class="time-line">
    <div class="heading">
      <heading title="experience" size="large" />
      <div class="line"></div>
    </div>
    <div class="content">
      <pretty-timeline base-color="#09afaf" :timeline-data="timelineArr" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .time-line {
    max-width: 1024px;
    margin: 0 auto;
  }
</style>
