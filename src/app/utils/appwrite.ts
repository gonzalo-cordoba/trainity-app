import { Client, Account, ID } from "appwrite";

// Configuración del cliente y cuenta de Appwrite
export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);
export const account = new Account(client);

// Función para crear una cuenta (registro)
export const signUp = (email: string, password: string) => {
  return account
    .create(ID.unique(), email, password)
    .then((response) => {
      console.log("Registro exitoso", response);
      return response;
    })
    .catch((error) => {
      console.error("Error en el registro", error);
      throw error;
    });
};

// Función para iniciar sesión (login)
export const login = (email: string, password: string) => {
  return account
    .createEmailPasswordSession(email, password)
    .then((response) => {
      console.log("Inicio de sesión exitoso", response);
      return response;
    })
    .catch((error) => {
      console.error("Error en el inicio de sesión", error);
      throw error;
    });
};

// Función para cerrar sesión
export const logout = () => {
  return account
    .deleteSession("current")
    .then(() => {
      console.log("Sesión cerrada exitosamente");
    })
    .catch((error) => {
      console.error("Error al cerrar sesión", error);
      throw error;
    });
};

// Función para enviar el correo de verificación
export const sendVerification = (redirectUrl: string) => {
  return account
    .createVerification(redirectUrl)
    .then((response) => {
      console.log("Correo de verificación enviado", response);
      return response;
    })
    .catch((error) => {
      console.error("Error al enviar el correo de verificación", error);
      throw error;
    });
};

// Función para completar la verificación del correo
export const completeVerification = (userId: string, secret: string) => {
  return account
    .updateVerification(userId, secret)
    .then((response) => {
      console.log("Verificación completada", response);
      return response;
    })
    .catch((error) => {
      console.error("Error al completar la verificación", error);
      throw error;
    });
};

// Función para recuperar la contraseña (enviar el correo de recuperación)
export const recoverPassword = (email: string, redirectUrl: string) => {
  return account
    .createRecovery(email, redirectUrl)
    .then((response) => {
      console.log("Correo de recuperación enviado", response);
      return response;
    })
    .catch((error) => {
      console.error("Error al enviar el correo de recuperación", error);
      throw error;
    });
};

// Función para actualizar la contraseña
export const updatePassword = (
  userId: string,
  secret: string,
  newPassword: string
) => {
  return account
    .updateRecovery(userId, secret, newPassword)
    .then((response) => {
      console.log("Contraseña actualizada", response);
      return response;
    })
    .catch((error) => {
      console.error("Error al actualizar la contraseña", error);
      throw error;
    });
};
