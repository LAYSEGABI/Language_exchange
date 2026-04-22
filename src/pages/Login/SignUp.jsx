import React, { useState } from "react";
import {
  User,
  Mail,
  MapPin,
  Languages,
  Lock,
  MessageSquare,
} from "lucide-react";
import "./sign-up.css";
import { supabase } from "../../services/supabaseClient";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hub: "",
    speaks: "",
    learns: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Bloqueia números nos campos de Nome e Idiomas usando Regex
    if (name === "name" || name === "speaks" || name === "learns") {
      const onlyLetters = value.replace(/[0-9]/g, "");
      setFormData({ ...formData, [name]: onlyLetters });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    try {
      // 1. Criar o usuário no Auth do Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      // 2. Se o usuário foi criado, salvar os dados extras na tabela profiles
      if (authData.user) {
        const { error: profileError } = await supabase.from("profiles").insert([
          {
            id: authData.user.id, // O ID que o Auth gerou
            full_name: formData.name,
            email: formData.email,
            hub: formData.hub,
            speaks: formData.speaks,
            learns: formData.learns,
            is_approved: false, // Começa sempre como pendente
          },
        ]);

        if (profileError) throw profileError;

        alert(
          "Solicitação enviada! Verifique o seu e-mail para confirmar a conta (se habilitado) ou aguarde a aprovação do Hub.",
        );
      }
    } catch (err) {
      setError(err.message || "Ocorreu um erro ao criar a conta.");
    }
  };

  return (
    <div className="signup-page">
      <div className="login-side-blue">
        <div className="brand-wrapper">
          <h1>
            Language <span>Exchange</span>
          </h1>
          <p>"From words to worlds"</p>
        </div>
      </div>

      <div className="login-side-form">
        <div className="form-container">
          <h2>Criar Conta</h2>
          <p className="form-subtitle">
            Preencha os dados para solicitar acesso.
          </p>

          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Nome Completo</label>
              <div className="input-wrapper">
                <User size={18} />
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>E-mail Acadêmico / Profissional</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Seu Hub (Cidade)</label>
              <div className="input-wrapper">
                <MapPin size={18} />
                <input
                  name="hub"
                  type="text"
                  value={formData.hub}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="languages-row">
              <div className="input-group">
                <label>Idiomas que fala</label>
                <div className="input-wrapper">
                  <Languages size={18} />
                  <input
                    name="speaks"
                    type="text"
                    value={formData.speaks}
                    onChange={handleInputChange}
                    placeholder="Ex: Português"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Idiomas que quer aprender</label>
                <div className="input-wrapper">
                  <MessageSquare size={18} />
                  <input
                    name="learns"
                    type="text"
                    value={formData.learns}
                    onChange={handleInputChange}
                    placeholder="Ex: Inglês"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="input-group">
              <label>Senha</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Confirmar Senha</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-signup">
              Solicitar Acesso
            </button>
          </form>
          <p className="signup-prompt">
            Já tem conta? <a href="/login">Fazer Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
