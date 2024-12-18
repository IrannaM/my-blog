import React ,{useState , useCallback} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DialogViewBox from './dialogViewBox';
import DialogEditBox from './dialogEditBox';

export default function ViewBlog({data}) {
    const [dialogView , setDialogView] = useState(false);
    const [dialogViewDetails, setDialogViewDetails] = useState({title:'', comments:''});
    const [dialogEdit , setDialogEdit] = useState(false);

    const handleView= (title,comments)=>{
        console.log("in handleView",title,comments)
        let details = {
            title : title,
            comments:comments
        }
        setDialogView(true)
        setDialogViewDetails(details)
    };

    const dialogViewClose = useCallback((data) =>{
        setDialogView(data)
    },[dialogView])

    const handleEdit= (title,comments)=>{
        console.log("in handleEdit ",title,comments)
        // let details = {
        //     title : title,
        //     comments:comments
        // }
        setDialogEdit(true)
        // setDialogViewDetails(details)
    };

    const dialogEditClose = useCallback((data) =>{
        setDialogEdit(data)
    },[dialogEdit])

  const uiDetails = data.map((ele,ind)=>{
         return <div key={Math.random()} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card sx={{  display : 'flex', justifyContent: 'center' , width : '50%' , marginBottom : '10px' }}>
                <Box sx={{ display: 'flex' ,  flexDirection: 'column' }}>
                    <CardContent sx={{ display: 'flex' , justifyContent: 'center', flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" >
                       {ele.title}
                    </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex' , justifyContent: 'center', alignItems: 'center', pl: 1, pb: 1 }}>
                        {ele.comments}
                    </Box>
                </Box>
            </Card>
            <div style={{paddingLeft : 50}}>
                <Button size="small" color="primary" onClick={()=> handleView( ele.title , ele.comments )}>
                    View
                </Button>
                <Button size="small" color="primary" onClick={()=> handleEdit( ele.title , ele.comments ,)} >
                    Edit
                </Button>
            </div> 
    </div>
    })
    return(
        <div>
            {uiDetails}
            { dialogView && <DialogViewBox dialogViewDetails={dialogViewDetails} dialogView={dialogView} oncloseViewDialog = {dialogViewClose} /> }  
            { dialogEdit && <DialogEditBox newEditCondition ={'Edit' } dialogEdit={dialogEdit} oncloseEditDialog = {dialogEditClose}/> }
        </div>
    )
}