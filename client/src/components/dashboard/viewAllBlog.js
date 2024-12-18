import { useState , useCallback } from "react";
import AppBar  from "./appBar";
import ViewBlog from "./viewBlog";
import { TextField , Button } from "@mui/material";
import DialogEditBox from "./dialogEditBox";

const ApiData = [
    { title: 'Post 1' , comments : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Post 2' , comments : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species' },
    { title: 'Post 3' , comments : 'Lizards are a widespread group of squamate reptiles' },
    { title: 'Post 4' , comments : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Post 5' , comments : 'Comments 5' }
]

const ViewAllBlog = () =>{
    const [viewAllDetails, setAllViewDetails] = useState(ApiData);
    const [dialogEdit , setDialogEdit] = useState(false);

    const handleEdit= ()=>{
        setDialogEdit(true)
    };

    const dialogEditClose = useCallback((data) =>{
            setDialogEdit(data)
        },[dialogEdit])

    return (
        <div >
            { dialogEdit && <DialogEditBox EditViewCondition={'New'} dialogEdit={dialogEdit} oncloseEditDialog = {dialogEditClose}/> } 
            <div style={{ display: 'flex', justifyContent: 'center' , alignItems: 'center'}}> 
                <h2>BLOG POST</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' , alignItems: 'center'}} >
                <div style={{paddingRight: 25}}><TextField id="outlined-basic" label="Search..." variant="outlined"  size="small" /></div>
                <div ><Button variant="outlined" size="small" onClick={handleEdit}> Add Blog </Button></div>
            </div>
            <div style={{  marginTop: 25}}>
                <ViewBlog data ={viewAllDetails} />
            </div>
        </div>
    )
}

export default ViewAllBlog;