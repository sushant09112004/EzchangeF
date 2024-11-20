import sushant from '../../../utils/mongodb';
import Form from '../../../models/Form';

export async function POST(req) {
  try {
    await sushant();

    const formData = await req.formData();
    const name = formData.get('name');
    const description = formData.get('description');
    const prize = formData.get('prize');
    const image = formData.get('image');
    const year = formData.get('year'); // New year field
    const field = formData.get('field'); // New field field

    if (!name || !description || !prize || !image || !year || !field) {
      return new Response(JSON.stringify({ error: 'All fields are required!' }), { status: 400 });
    }

    const imageBuffer = Buffer.from(await image.arrayBuffer());

    const newForm = new Form({
      name,
      description,
      prize,
      image: {
        data: imageBuffer,
        contentType: image.type,
      },
      year,
      field,
    });

    await newForm.save();

    return new Response(JSON.stringify({ message: 'Form submitted successfully!' }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to save form data', details: error.message }), { status: 500 });
  }
}

export async function GET() {
    try {
      await sushant();
  
      const forms = await Form.find({});
      const results = forms.map((form) => ({
        name: form.name,
        description: form.description,
        prize: form.prize,
        image: {
          data: form.image.data.toString("base64"),
          contentType: form.image.contentType,
        },
        year: form.year, // Include year in the result
        field: form.field, // Include field in the result
        createdAt: form.createdAt, // Include createdAt in the result
        updatedAt: form.updatedAt, // Include updatedAt in the result
      }));
  
      return new Response(JSON.stringify(results), { status: 200 });
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: "Failed to fetch data",
          details: error.message,
        }),
        { status: 500 }
      );
    }
  }
  