import './Chart.css';

function Chart(props){
  const classes ='Chart' + props.className;
  return <div className={classes}>{props.children}</div>
}
export default Chart;
