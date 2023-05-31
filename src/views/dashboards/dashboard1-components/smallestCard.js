import { ShoppingBagOutlined } from "@material-ui/icons";
import {Card,CardActionArea,CardContent,Space,Typography } from "@material-ui/core";
import { TbReportMoney} from 'react-icons/tb'


function Dashboard() {
    return(
        <div style={{display:"flex"}}>
            
            {/* <CardContent level={4}>dashboard </CardContent> */}
           <space direction="horizontal">
            <Card style={{borderRadius:'5px',padding:"0px 50px 10px 10px"}}>
                   <p style={{fontSize:"small"}}>Revenue</p>
                    <TbReportMoney />
                    
                <h style={{fontSize:"25px",color:"blue",padding:"5px"}}>+30,000</h>
                    <CardActionArea title="inventory" value={1234}/>
                    </Card>
            </space>

            <space direction="horizontal">
            <Card style={{borderRadius:'5px',padding:"0px 50px 10px 10px"}}>
                   <p style={{fontSize:"small"}}>Income</p>
                    <TbReportMoney />
                    
                <h style={{fontSize:"25px",color:"blue",padding:"5px"}}>+20,000</h>
                    <CardActionArea title="inventory" value={1234}/>
                    </Card>
            </space>

            <space direction="horizontal">
            <Card style={{borderRadius:'5px',padding:"0px 50px 10px 10px"}}>
                   <p style={{fontSize:"small"}}>Purchase</p>
                    <TbReportMoney  marginTop="-10px"/>
                    
                <h style={{fontSize:"25px",color:"blue",padding:"5px"}}>+23,000</h>
                    <CardActionArea title="inventory" value={1234}/>
                    </Card>
            </space>


            <space direction="horizontal">
            <Card style={{borderRadius:'5px',padding:"0px 50px 10px 10px"}}>
                   <p style={{fontSize:"small"}}>Sales Return</p>
                    <TbReportMoney />
                    
                <h style={{fontSize:"25px",color:"blue",padding:"5px"}}>+19,000</h>
                    <CardActionArea title="inventory" value={1234}/>
                    </Card>
            </space>
        </div>
    )
}
export default Dashboard;