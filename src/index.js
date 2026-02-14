import './index.css'
import data from '../data/data.json'

let chart = new d3.OrgChart().container(".chart-container").data(data).nodeContent(function (d, i, arr, state) {
    const color = '#FFFFFF';
    return `
            <div style="font-family: 'Inter', sans-serif;background-color:${color}; position:absolute;margin-top:-1px; margin-left:-1px;width:${d.width}px;height:${d.height}px;border-radius:10px;border: 1px solid #E4E2E9">
               <div style="background-color:${color};position:absolute;margin-top:-25px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
               <img src=" ${d.data.imageUrl
        }" style="position:absolute;margin-top:-20px;margin-left:${20}px;border-radius:100px;width:40px;height:40px;" />
               
              <div style="color:#08011E;position:absolute;right:20px;top:17px;font-size:10px;"><i class="fas fa-ellipsis-h"></i></div>

              <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:32px"> ${d.data.name
        } </div>
              <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${d.data.positionName
        } </div>


           </div>
  `;
}).render()