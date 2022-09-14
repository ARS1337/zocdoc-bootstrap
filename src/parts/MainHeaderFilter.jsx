import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Select from "../components/Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsSearch } from "react-icons/bs";

function MainHeaderFilter(props) {
  const [startDate, setStartDate] = useState(new Date());

  const list = [
    {
      label: "popular",
      options: [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ],
    },
    {
      label: "popular2",
      options: [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ],
    },
  ];
  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center",
  };
  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  const customStyles = {};

  return (
    <Container fluid className=" pb-5 pt-3 pr-5 m-0 mr-0 headerFilter">
      <Row className="bg-white py-3 rounded-2  filterContainer">
        <Col style={{ minWidth: "300px" }}>
          <BsSearch color="rgb(0, 35, 75)" size={18} />
          <Select
            menuColor="red"
            options={list}
            formatGroupLabel={formatGroupLabel}
            styles={customStyles}
          />
        </Col>
        <Col>
          <Select
            menuColor="red"
            options={list}
            formatGroupLabel={formatGroupLabel}
            styles={customStyles}
          />
        </Col>
        <Col>
          {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
          <Select
            menuColor="red"
            options={list}
            formatGroupLabel={formatGroupLabel}
            styles={customStyles}
          />
        </Col>
        <Col>
          <Select
            menuColor="red"
            options={list}
            formatGroupLabel={formatGroupLabel}
            styles={customStyles}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MainHeaderFilter;
