import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  color: ${({ theme }) => theme.primary};
`;
const Tag = styled.div`
  background-color: ${({ theme }) => theme.primary + 20};
  color: ${({ theme }) => theme.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
`
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-top: auto;
`;
const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-size : 12px;
  font-weight: 600;
  flex: 1;
  text-align: center;
  padding: 2px;
  background-color: ${({ theme }) => theme.buttonBackground};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.buttonBorderColor};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 20};
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Tags>{project.tags.map((tag,index) => (
        <Tag key={index}>{tag}</Tag>
      ))}</Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <ButtonContainer>
        <Button href={project.frontEnd} target="_blank">
          Front End Code
        </Button>
        <Button href={project.backEnd} target="_blank">
          Back End Code
        </Button>
      </ButtonContainer>
      <Button href={project.webapp} target="_blank"> 
        View Live App
      </Button>
    </Card>
  );
};

export default ProjectCard;
