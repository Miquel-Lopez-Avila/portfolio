export const required = (t) => ({ required: true, message: 'Campo requerido' });

export const email = (t) => ({ type: 'email', message: 'Formato del email incorrecto' });

export const notEmptyString = (t) => ({
  validator: (rule, value) => {
    if (value && value.trim()) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('El campo no puede estar vacio'))
  },
});

export const exactLength = (t, length) => ({
  validator: (rule, value) => {
    if (value?.length === length) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('El campo debe tener la longitud indicada', { length }));
  },
});
