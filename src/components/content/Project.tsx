import { useState } from "react";
import { Button, Modal } from 'antd';
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNestjs, SiNginx } from 'react-icons/si'

interface IProject {
  image: JSX.Element,
  title: string,
  shortDescription: string,
  detail: {
    description: string,
    frontend: string,
    backend: string,
    member: number,
    role: string,
    demo: string,
    github: string
  }
}

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [detailProject, setDetailProject] = useState<IProject | null>(null)




  const handleDetailProject = (project: IProject) => {
    setIsModalOpen(true)
    setDetailProject(project)
  }

  const dataProjects: IProject[] = [
    {
      image: <SiNginx
        size={50}
        color="#008000"
      />,
      title: "Caesar's Book Ecommerce",
      shortDescription: "Website thương mại điện tử sách",
      detail: {
        description: "(Self-learning) Xây dựng website có cả backend lẫn frontend và deploy sử dụng Docker + Nginx",
        frontend: "React (TypeScript), Redux/Redux Toolkit, Ant Design",
        backend: "NestJS, NodeJS, MongoDB",
        member: 1,
        role: "All",
        demo: " http://14.225.254.16/?fbclid=IwAR06-h_c8iLFDRFtKntZ5igYcZE_XYbGZvJM6ke7KTMY-jJOAvLXfxI5Ijk",
        github: " https://github.com/CaesarNgyn/Caesar-Book-Ecommerce"

      }
    },
    {
      image: <SiNestjs
        size={50}
        color="#C30023"
      />,
      title: "Caesar Job Finding",
      shortDescription: "Website tìm kiếm việc làm",
      detail: {
        description: "(Self-learning) Xây dựng website quản lý tìm kiếm việc làm",
        frontend: "React (TypeScript)",
        backend: "NestJS, MongoDB",
        member: 1,
        role: "Developer",
        demo: "",
        github: " https://github.com/CaesarNgyn/Caesar-Job-Finding"

      }
    },
    {
      image: <FaNodeJs
        size={50}
        color="#68A063"
      />,
      title: "STeeK English",
      shortDescription: "Website  học Tiếng Anh trực tuyến",
      detail: {
        description: "(Đồ án mini) Xây dựng website quản lý học Tiếng Anh trực tuyến",
        frontend: "React, Redux Toolkit, Boostrap 5",
        backend: "NodeJS (Express), MongoDB",
        member: 3,
        role: "Team Lead",
        demo: "",
        github: " https://github.com/CaesarNgyn/STeeK-English-Website"

      }
    },
    {
      image: <FaReact
        size={50}
        color="#2bebfd"
      />,
      title: "React Portfolio",
      shortDescription: "Website sơ yếu lý lịch",
      detail: {
        description: "(Self-learning) Xây dựng website giới thiệu cá nhân",
        frontend: "React (TypeScript), Ant Design",
        backend: "Không sử dụng",
        member: 1,
        role: "Developer",
        demo: "",
        github: " https://github.com/CaesarNgyn/React-Portfolio"

      }
    },
  ]

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setDetailProject(null)
  }


  return (
    <>
      <Modal
        title={detailProject ? `Dự án ${detailProject.title}` : ""}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        centered
        maskClosable={false}

      >
        {detailProject &&
          (
            <ul>
              <li>Miêu tả: {detailProject.detail.description}</li>
              <li>Frontend: {detailProject.detail.frontend}
              </li>
              <li>Backend: {detailProject.detail.backend}
              </li>
              <li>Số lượng thành viên dự án: {detailProject.detail.member}
              </li>
              <li>Vai trò: {detailProject.detail.role}
              </li>
              <li>
                Demo:
                <a href={detailProject.detail.demo} target="_blank">
                  {detailProject.detail.demo}
                </a>

              </li>
              <li>
                Github:
                <a href={detailProject.detail.github} target="_blank">
                  {detailProject.detail.github}
                </a>

              </li>
            </ul>
          )
        }


      </Modal>

      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Projects</h3>
              <span>Dự án đã hoàn thành</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects && dataProjects.map((project, index) => {
                  return (
                    <li
                      key={`project-${index}`}
                      onClick={() => handleDetailProject(project)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="inner">
                        <div className="icon">
                          {project.image}
                        </div>
                        <div className="title_service">
                          <h3>{project.title}</h3>
                        </div>
                        <div className="text">
                          <p>{project.shortDescription}</p>
                        </div>
                      </div>
                    </li>
                  )

                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project