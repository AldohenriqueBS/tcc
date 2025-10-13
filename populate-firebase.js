import { db } from './firebase-config.js';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Initial data
const initialUsers = [
  {
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    name: 'Administrador'
  },
  {
    username: 'gerente',
    password: 'gerente123',
    role: 'gerente',
    name: 'Gerente'
  },
  {
    username: 'recepcionista',
    password: 'recepcao123',
    role: 'recepcionista',
    name: 'Recepcionista'
  }
];

const initialQuartos = [
  {
    numero: '101',
    tipo: 'standard',
    capacidade: 2,
    preco: 150,
    descricao: 'Quarto confortável com vista para a cidade',
    status: 'disponivel'
  },
  {
    numero: '102',
    tipo: 'standard',
    capacidade: 2,
    preco: 150,
    descricao: 'Quarto confortável com vista para a cidade',
    status: 'ocupado'
  },
  {
    numero: '201',
    tipo: 'deluxe',
    capacidade: 3,
    preco: 250,
    descricao: 'Quarto espaçoso com varanda',
    status: 'disponivel'
  },
  {
    numero: '301',
    tipo: 'suite',
    capacidade: 4,
    preco: 400,
    descricao: 'Suíte luxuosa com sala de estar',
    status: 'disponivel'
  }
];

const initialClientes = [
  {
    nome: 'João Silva',
    email: 'joao@email.com',
    telefone: '(11) 99999-9999',
    cpf: '123.456.789-00',
    endereco: 'Rua das Flores, 123',
    status: 'ativo'
  },
  {
    nome: 'Maria Santos',
    email: 'maria@email.com',
    telefone: '(11) 88888-8888',
    cpf: '987.654.321-00',
    endereco: 'Av. Principal, 456',
    status: 'ativo'
  },
  {
    nome: 'Pedro Costa',
    email: 'pedro@email.com',
    telefone: '(11) 77777-7777',
    cpf: '456.789.123-00',
    endereco: 'Rua do Centro, 789',
    status: 'inativo'
  }
];

async function populateCollection(collectionName, data) {
  try {
    console.log(`Populating ${collectionName}...`);
    
    // Check if collection already has data
    const querySnapshot = await getDocs(collection(db, collectionName));
    if (!querySnapshot.empty) {
      console.log(`${collectionName} already has data, skipping...`);
      return;
    }

    // Add documents
    for (const item of data) {
      const docRef = await addDoc(collection(db, collectionName), {
        ...item,
        dataCriacao: new Date().toISOString()
      });
      console.log(`Added ${collectionName} document with ID: ${docRef.id}`);
    }
    
    console.log(`✅ ${collectionName} populated successfully`);
  } catch (error) {
    console.error(`Error populating ${collectionName}:`, error);
  }
}

async function populateFirebase() {
  console.log('🚀 Starting Firebase population...');
  
  try {
    await populateCollection('users', initialUsers);
    await populateCollection('quartos', initialQuartos);
    await populateCollection('clientes', initialClientes);
    
    console.log('✅ Firebase population completed!');
  } catch (error) {
    console.error('❌ Error during Firebase population:', error);
  }
}

// Run the population
populateFirebase();
