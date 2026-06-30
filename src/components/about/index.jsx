import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            About Htet Wai Yan
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Robotics engineer with industry experience at ROM Dynamics
            Robotics, where I work on building and improving robotic systems.
            Skilled in designing mechanical and control systems, programming
            with Python and C++, and working with tools like ROS2, Artificial
            Intelligence and embedded hardware. I enjoy solving real-world
            problems through robotics and want to deepen my knowledge
            through university studies. Interested in intelligent systems,
            automation, and human-robot interaction.
            
            This page showcases the number of projects I participated in, reflecting my 4 years of experience related to Robotics. 
            The icons displayed here represent the specific tools and technologies I utilized to bring these projects to life.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            50+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=gyiptgyipt&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Zyme"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=gyiptgyipt&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Zyme"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <div className="flex flex-wrap justify-center gap-2">
            <img
              src="https://img.shields.io/badge/ROS-22314E?style=for-the-badge&logo=robot-operating-system&logoColor=white"
              alt="ROS"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
              alt="Python"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white"
              alt="C"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
              alt="C++"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/CMake-064F8C?style=for-the-badge&logo=cmake&logoColor=white"
              alt="CMake"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Qt-41CD52?style=for-the-badge&logo=qt&logoColor=white"
              alt="Qt"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white"
              alt="Go"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white"
              alt="Lua"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white"
              alt="Bash"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
              alt="Linux"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
              alt="Git"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/VScode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
              alt="VS Code"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white"
              alt="Arduino"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Raspberry_Pi-C51A4A?style=for-the-badge&logo=raspberry-pi&logoColor=white"
              alt="Raspberry Pi"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white"
              alt="OpenCV"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/MATLAB-0076A8?style=for-the-badge&logo=matlab&logoColor=white"
              alt="MATLAB"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"
              alt="React"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
              alt="TensorFlow"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white"
              alt="NumPy"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
              alt="PyTorch"
              className="h-10"
              loading="lazy"
            />
            <a
              href="https://www.osrfoundation.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/OSRF-3B72B9?style=for-the-badge&logo=ros&logoColor=white"
                alt="OSRF"
                className="h-10"
                loading="lazy"
              />
            </a>
            <a
              href="https://gazebosim.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Gazebo-0F75BC?style=for-the-badge&logo=gazebo&logoColor=white"
                alt="Gazebo"
                className="h-10"
                loading="lazy"
              />
            </a>
            <a
              href="https://platformio.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/PlatformIO-177A9E?style=for-the-badge&logo=platformio&logoColor=white"
                alt="PlatformIO"
                className="h-10"
                loading="lazy"
              />
            </a>
            <a
              href="https://micro.ros.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/micro_ros-1A73E8?style=for-the-badge&logo=robot-operating-system&logoColor=white"
                alt="micro-ROS"
                className="h-10"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.espressif.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Espressif-EE2C2C?style=for-the-badge&logo=espressif&logoColor=white"
                alt="Espressif"
                className="h-10"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.freecadweb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/FreeCAD-0094D6?style=for-the-badge&logo=freecad&logoColor=white"
                alt="FreeCAD"
                className="h-10"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.freertos.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/FreeRTOS-000000?style=for-the-badge&logo=freertos&logoColor=white"
                alt="FreeRTOS"
                className="h-10"
                loading="lazy"
              />
            </a>
            <img
              src="https://img.shields.io/badge/GNU%20Octave-77216F?style=for-the-badge&logo=gnu&logoColor=white"
              alt="GNU Octave"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"
              alt="Ubuntu"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Debian-A81D33?style=for-the-badge&logo=debian&logoColor=white"
              alt="Debian"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threejs&logoColor=white"
              alt="three.js"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"
              alt="Discord"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Anaconda-44A833?style=for-the-badge&logo=anaconda&logoColor=white"
              alt="Anaconda"
              className="h-10"
              loading="lazy"
            />
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=gyiptgyipt&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Zyme"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/gyiptgyipt"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=zyme&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Zyme"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
