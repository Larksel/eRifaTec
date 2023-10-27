import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { sign } from "jsonwebtoken";
import bcrypt from "bcryptjs";

//Insert
export const criarUsuario = async (req: Request, res: Response, next: NextFunction) => {
  const {nome, cpf, email, senha, dataNasc, cep, estado, cidade, bairro, rua, numero, celular,} = req.body;
  const usuarioExiste = await prisma.usuario.findFirst({
    where: {
      emailusuario: String(email),
    },
  });

  if (usuarioExiste) {
    console.log("E-mail já cadastrado");
    res.status(400).json({ msg: "Email já cadastrado" });
    return;
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 8);
    const usuario = await prisma.usuario.create({
      data: {
        nomeusuario: nome,
        cpfusuario: cpf,
        emailusuario: email,
        senhausuario: senhaHash,
        datanascusuario: dataNasc,
        cep: cep,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        numero: numero,
        celular: celular,
      },
    });
    res.status(201).json(usuario);
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: "Erro desconhecido" });
    }
  }
};

//Select * from Usuario
export const listarUsuario = async (req: Request, res: Response) => {
  try {
    const response = await prisma.usuario.findMany();
    res.status(200).json(response);
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: "Erro desconhecido" });
    }
  }
};

//Select para um registro
export const loginUsuario = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  const senhaHash = await bcrypt.hash(senha, 8);
  const userId = req.params.id;
  try {
    const usuarioExiste = await prisma.usuario.findFirst({
      where: {
        emailusuario: String(email),
      },
    });

    if (!usuarioExiste) {
      console.log("E-mail não cadastrado");
    }

    const usuario = await prisma.usuario.findFirst({
      where: {
        emailusuario: String(email),
      },
      select: {
        emailusuario: true,
        senhausuario: true,
        idusuario: true,
      },
    });

    if (usuario?.senhausuario === senhaHash) {
      console.log("Login efetuado com sucesso");
    } else {
      console.log("Email ou senha incorretos");
    }
  } catch (error) {
    console.log("Algum erro nessa merda");
  }
};

//update usuario
export const atualizarUsuario = async (req: Request, res: Response) => {
  const {nome, cpf, email, senha, dataNasc, cep, estado, cidade, bairro, rua, numero, celular} = req.body;
  try {
    const usuario = await prisma.usuario.update({
      where: {
        idusuario: Number(req.params.id),
      },
      data: {
        nomeusuario: nome,
        cpfusuario: cpf,
        emailusuario: email,
        senhausuario: senha,
        datanascusuario: dataNasc,
        cep: cep,
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua: rua,
        numero: numero,
        celular: celular,
      },
    });
    res.status(200).json(usuario);
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: "Erro desconhecido" });
    }
  }
};

//delete usuario
export const deletarUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await prisma.usuario.delete({
      where: {
        idusuario: Number(req.query.id),
      },
    });
    res.status(200).json(usuario);
  } catch (error) {
    if (error instanceof Error) {
      // Verificar se 'error' é uma instância de 'Error'
      res.status(400).json({ msg: error.message });
    } else {
      // Se 'error' não for uma instância de 'Error', você pode tratar de outra forma
      res.status(500).json({ msg: "Erro desconhecido" });
    }
  }
};
