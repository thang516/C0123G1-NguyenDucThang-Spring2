package com.example.back_end_spring2.model;


import javax.persistence.*;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username", nullable = false, unique = true, length = 20)
    private String username;

    @Column(name = "password", nullable = false, columnDefinition = "TEXT")
    private String password;
    @Column(name = "verification_code")
    private Integer verificationCode;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Roles roles;
    @Column(length = 50)
    private String email;

    public Users(Integer id, String username, String password, Integer verificationCode, Roles roles, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.verificationCode = verificationCode;
        this.roles = roles;
        this.email = email;
    }

    public Users() {
    }

    public Users(String username, String password, Roles role) {
        this.username = username;
        this.password = password;
        this.roles  = role;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(Integer verificationCode) {
        this.verificationCode = verificationCode;
    }

    public Roles getRoles() {
        return roles;
    }

    public void setRoles(Roles roles) {
        this.roles = roles;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


}
