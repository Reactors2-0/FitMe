import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {Accordion as AccordionUi}   from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import AccordionDetails from '@material-ui/core/AccordionActions'
// @material-ui/icons
import ExpandMore from "@material-ui/icons/ExpandMore";

import styles from "../../../assets/jss/material-kit-pro-react/components/accordionStyle.js";

const useStyles = makeStyles(styles);

export default function Accordion(props) {
  const [active, setActive] = React.useState(
    props.active.length === undefined ? [props.active] : props.active
  );
  const [single] = React.useState(
    props.active.length === undefined
  );
  const handleChange = panel => () => {
    let newArray;

    if (single) {
      if (active[0] === panel) {
        newArray = [];
      } else {
        newArray = [panel];
      }
    } else {
      if (active.indexOf(panel) === -1) {
        newArray = [...active, panel];
      } else {
        newArray = [...active];
        newArray.splice(active.indexOf(panel), 1);
      }
    }
    setActive(newArray);
  };
  const { collapses, activeColor } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {collapses.map((prop, key) => {
        return (
          <AccordionUi
            expanded={active === key || active.indexOf(key) !== -1}
            onChange={handleChange(key)}
            key={key}
            classes={{
              root: classes.expansionPanel,
              expanded: classes.expansionPanelExpanded
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              classes={{
                root: `${classes.expansionPanelSummary} ${
                  classes[activeColor + "ExpansionPanelSummary"]
                }`,
                expanded: `${classes.expansionPanelSummaryExpaned} ${
                  classes[activeColor + "ExpansionPanelSummaryExpaned"]
                }`,
                content: classes.expansionPanelSummaryContent,
                expandIcon: classes.expansionPanelSummaryExpandIcon
              }}
            >
              <h4 className={classes.title}>{prop.title}</h4>
            </AccordionSummary>
            <AccordionDetails className={classes.expansionPanelDetails}>
              {prop.content}
            </AccordionDetails>
          </AccordionUi>
        );
      })}
    </div>
  );
}

Accordion.defaultProps = {
  active: -1,
  activeColor: "primary"
};

Accordion.propTypes = {
  // index of the default active collapse
  active: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node
    })
  ).isRequired,
  activeColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ])
};
