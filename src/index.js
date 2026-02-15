import './index.css'
import data from '../data/data.json'

let chart = new d3.OrgChart().container(".chart-container").data(data).nodeContent((d, i, arr, state) => {
  return `
    <div class="org-chart-node" style="width:${d.width}px;height:${d.height}px;">
      <div class="org-chart-node-circle"></div>
      <img src="${d.data.imageUrl}" class="org-chart-node-image" />
      <div class="org-chart-node-menu"><i class="fas fa-ellipsis-h"></i></div>
      <div class="org-chart-node-name"> ${d.data.name} </div>
      <br>
      <div class="org-chart-node-position"> ${d.data.positionNameEN} </div>
      <div class="org-chart-node-position"> ${d.data.positionNameFR} </div>
      <div class="org-chart-node-position"> ${d.data.classification} </div>
    </div>
  `;
}).render()