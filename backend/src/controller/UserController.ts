import { Request, Response , NextFunction} from 'express';
import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


//Insert 
export const criarUsuario = async (req: Request, res: Response, next: NextFunction) => {
  const { nome, cpf, email, senha, dataDeNascimento, cep, estado, cidade, bairro, rua, numero, celular} = req.body
  try {
      const usuario = await prisma.usuario.create({
          data: {
            nomeusuario: nome,
            cpfusuario: cpf,
            emailusuario: email,
            senhausuario: senha,
            datanascusuario: dataDeNascimento,
            cep: cep,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            celular: celular
          },
      })
      res.status(201).json(usuario)
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}
/*
//Select * from Usuario
export const listarUsuario = async (req: Request, res: Response) => {
  try {
      const response = await prisma.usuario.findMany()
      res.status(200).json(response)
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}

//Select para um registro
export const listarUsuarioPorId = async (req: Request, res: Response) => {
  try {
      const response = await prisma.usuario.findUnique({
          where: {
              id: Number(req.params.id),
          },
      })
      res.status(200).json(response)
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}


//update usuario
export const atualizarUsuario = async (req: Request, res: Response) => {
  const { nome, cpf, email, senha, dataDeNascimento, cep, estado, cidade, bairro, rua, numero, celular} = req.body
  try {
      const product = await prisma.usuario.update({
          where: {
              id: Number(req.params.id),
          },
          data: {
            nomeusuario: nome,
            cpfusuario: cpf,
            emailusuario: email,
            senhausuario: senha,
            datanascusuario: dataDeNascimento,
            cep: cep,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            celular: celular
          },
      })
      res.status(200).json(usuario)
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}


//delete usuario
export const deletarUsuario = async (req: Request, res: Response) => {
  try {
      const product = await prisma.usuario.delete({
          where: {
              id: Number(req.params.id),
          },
      })
      res.status(200).json(usuario)
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: 'Erro desconhecido' });
    }
  }
}


*/