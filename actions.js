"use server";

export async function submitContactForm(formData) {

  const encodedData = new URLSearchParams({
    "form-name": "contact",
    ...formData,
  }).toString();

  try {

    const response = await fetch(process.env.URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    });

    if (!response.ok) {
      throw new Error(`El servidor respondió con un error: ${response.status}`);
    }


    return { success: true };
  } catch (error) {
    console.error("Error al enviar el formulario:", error);

    return { success: false, error: error.message };
  }
}