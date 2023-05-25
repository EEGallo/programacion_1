import React from 'react';
import { useForm } from "react-hook-form";
import edadValidator from './validator';
import '../stylesheet/Form.css'

const Form = (props) => {

    const { register, formState: {errors}, watch ,handleSubmit } = useForm({
        defaultValues: {
            nombre: 'Matías Navarro',
            edad: '30',
            email: 'matiasn@gmail.com',
            mensaje: 'Cuentanos en que podemos ayudarte'}});
    const onSubmit = (data) => {
        console.log(data);}

  return (
    <div className='box-form'>
        <h2>Contactanos</h2>
        <p>Nombre: {watch('nombre')}</p>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className='campus-form'>
                <label>Nombre</label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })}/>
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}

            </div>
            <div className='campus-form'>
                <label>Edad</label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })}/>
                {errors.edad && <p>La edad debe estar entre 18 y 65 años</p>}
            </div>
            <div className='campus-form'>
                <label>Email</label>
                <input type="email" {...register('email', {
                    pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/i
                })}/>
                {errors.email?.type === 'pattern' && <p>ELformato del email es incorrecto</p>}
            </div>
            <div className='campus-form'>
                <label>País</label>
                <select {...register('pais')}>
                    <option value='ar'>Argentina</option>
                    <option value='br'>Brasil</option>
                    <option value='mx'>México</option>
                </select>
            </div>
            <div className='campus-form'>
                <label>Mensaje</label>
                <input type="text" {...register('mensaje', {
                    required: true,
                    minLength: 300,
                })}/>
                {errors.mensaje?.type === 'minLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}

            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default Form;
