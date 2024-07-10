import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm } from "react-hook-form";


import{
    Form, FormControl, FormDescription, FormField,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import {Button }from "@/components/ui/button";

const formSchema = z.object({
    title: z.string().min(1,{
        message:"Title is required",
    }),
});

const Create = () =>{
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            title: ""
        }
    });

    const{ isSubmitting, isValid} =form.formState;

    const onSubmit = (values:z.infer<typeof formSchema>)=> {
        console.log(values);
    }
    return(
        <div>create</div>
    )
}
export default Create