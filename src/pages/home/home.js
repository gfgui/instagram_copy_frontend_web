import React from "react";
import '../.././global.css';
import { Facebook } from "lucide-react";
import Download_Google from "../../assets/b_google.png";
import Download_Microsoft from "../../assets/b_microsoft.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-white h-screen flex flex-col">
            <div className="min-w-96 max-w-96 mx-auto my-4 flex flex-col gap-3 h-full">
                <div className="flex flex-col border border-zinc-300 rounded-sm border-spacing-1 p-8 gap-2">
                    <div className="text-4xl flex justify-center mt-4 mb-10">
                        <h1>Instagram</h1>
                    </div>
                    <div className="px-5">
                        <div class="relative h-9 bg-slate-50">
                            <input placeholder="Telefone, nome de usuário ou email"
                                type="text"
                                class="peer border border-spacing-1 border-gray-200 px-2 h-full w-full bg-transparent pt-3 pb-1 font-sans text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-green-600 placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-0" />
                            <label
                                class="after:content[''] pointer-events-none absolute pt-2 left-2 -top-0.5 flex h-full w-full select-none !overflow-visible truncate text-[9px] font-normal leading-tight text-gray-500 transition-all after:absolute  after:block after:w-full after:scale-x-0 after:transition-transform after:duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:leading-[2.15] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[9px] peer-focus:leading-tight peer-focus:after:scale-x-0 peer-focus:after:border-gray-900 peer-disabled:text-zinc-300 peer-disabled:border-slate-100 peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Telefone, nome de usuário ou email
                            </label>
                        </div>
                    </div>

                    <div className="px-5">
                        <div class="relative h-9 bg-slate-50">
                            <input placeholder="Telefone, nome de usuário ou email"
                                type="password"
                                class="peer border border-spacing-1 border-gray-200 px-2 h-full w-full bg-transparent pt-3 pb-1 font-sans text-xs font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-green-600 placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-zinc-200 placeholder:opacity-0 focus:placeholder:opacity-0" />
                            <label
                                class="after:content[''] pointer-events-none absolute pt-2 left-2 -top-0.5 flex h-full w-full select-none !overflow-visible truncate text-[9px] font-normal leading-tight text-gray-500 transition-all after:absolute  after:block after:w-full after:scale-x-0 after:transition-transform after:duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:leading-[2.15] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[9px] peer-focus:leading-tight peer-focus:after:scale-x-0 peer-focus:after:border-gray-900 peer-disabled:text-zinc-300 peer-disabled:border-slate-100 peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Senha
                            </label>
                        </div>
                    </div>

                    <div className="px-5">
                        <button
                            class="select-none rounded-lg bg-sky-400 py-2 mt-2 w-full text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-cyan-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Entrar
                        </button>
                    </div>

                    <div className="px-5 flex gap-2 items-center mt-2">

                        <div className="flex flex-col w-full">
                            <div className="w-full h-3"></div>
                            <div className="border-t-2 border-zinc-200 w-full h-3"></div>
                        </div>

                        <div className="flex-1 text-zinc-500 text-sm mx-2">OU</div>

                        <div className="flex flex-col w-full">
                            <div className="w-full h-3"></div>
                            <div className="border-t-2 border-zinc-200 w-full h-3"></div>
                        </div>
                    </div>

                    <div className="mx-auto text-blue-900 mt-3 text-sm">
                        <a href="" className="flex gap-2 justify-center"><Facebook className="w-5 h-5" /> <div className="pt-0.5">Entrar com Facebook</div></a>
                    </div>

                    <div className="mx-auto text-zinc-500 mt-3 leading-1  text-sm">
                        <a href="" className="flex gap-2 justify-center text-xs"><div>Esqueceu a senha?</div></a>
                    </div>

                </div>
                <div className="flex flex-col border border-zinc-300 rounded-sm border-spacing-1 p-6 gap-2">
                    <div className="flex text-sm">
                        <div className="mx-auto">Não tem uma conta? <a href="" className="text-sky-500">Cadastre-se</a></div>
                    </div>
                </div>
                <div className="flex flex-col p-3 gap-2 text-sm">
                    <div className="flex">
                        <div className="mx-auto">Obtenha o aplicativo.</div>
                    </div>

                    <div className="flex mt-2">
                        <div className="mx-auto flex gap-2">
                            <a href=""><img src={Download_Google} className="h-10"></img></a>
                            <a href=""><img src={Download_Microsoft} className="h-10"></img></a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex-1 p-10 space-y-4 flex-col">
                <div className="gap-3 flex justify-center">
                    <a href="" className="text-xs stroke-1 text-zinc-500">Meta</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Sobre</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Blog</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Carreiras</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Ajuda</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">API</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Privacidade</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Termos</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Localização</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Instagram Lite</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Threads</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Carregamento de contatos e não usuários</a>
                    <a href="" className="text-xs stroke-1 text-zinc-500">Meta Verified</a>
                </div>
                <div className="gap-3 flex justify-center">
                    <select href="" className="text-xs stroke-1 text-zinc-500">
                        <option selected>Português (Brasil)</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <a className="text-xs stroke-1 text-zinc-500">© 2024 Instagram from Meta</a>

                </div>
            </footer>
        </div>
    )
}

export default Home