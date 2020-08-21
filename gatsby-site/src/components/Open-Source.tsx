import React from "react"
import styled from "styled-components"
import TaskListOne from "../image-components/task_list_one"
import TaskListTwo from "../image-components/task_list_two"
import TaskListThree from "../image-components/task_list_three"
import { Link } from "gatsby"

const Projects = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  background-color: rgb(69, 57, 126);
  background-color: white;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-height: 100%;

  --animate-duration: 1s;
`

const ProjectsContainer = styled.div`
  width: 600px;
  display: none;
  padding-right: 10%;
`
const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-radius: 90px;
  background-color: green;
  text-align: center;
  padding: 2%;
`

const TaskLists = styled.div`
  display: flex;
`
const ImgContainer = styled.div`
  width: 550px;
`

const ProjectsButtonContainer = styled.div`
  width: 600px;
  margin-top: 5%;
  margin-left: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const OpenSourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin-left: 150px;
`

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  align-items: center;
`

const OpenSource = (): JSX.Element => (
  <Projects>
    <ExampleContainer>
      <ImgContainer
        data-sal="fade"
        data-sal-delay="500"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <TaskListOne />
      </ImgContainer>
    </ExampleContainer>

    <TitleContainer>
      <OpenSourceContainer>
        <div
          id="open_source_heading_container"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          <h2 id="open_source">OPEN SOURCE</h2>
        </div>
        <div
          id="open_source_caption_container"
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="500"
          data-sal-easing="ease"
        >
          <h3 id="open_source_caption">
            I build responsive websites with an eye for compelling design and
            intuitive UI. For more information and to view source code, check
            out my Github profile: https://github.com/jjdudley
          </h3>
        </div>
      </OpenSourceContainer>
      <ProjectsButtonContainer
        data-sal="fade"
        data-sal-delay="300"
        data-sal-duration="500"
        data-sal-easing="ease"
      >
        <Link id="view_projects" to="https://github.com/jjdudley">
          View Projects
        </Link>{" "}
        <br />
      </ProjectsButtonContainer>
    </TitleContainer>

    <ProjectsContainer>
      <TaskListContainer>
        <h3>Task List App</h3>
        <p>Create and organize new tasks and project categories</p>
        <TaskLists>
          <TaskListOne />
          <TaskListTwo />
          <TaskListThree />
        </TaskLists>
      </TaskListContainer>
    </ProjectsContainer>
  </Projects>
)

export default OpenSource
