/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.proyecto.mapping;

import com.google.gson.Gson;

/**
 *
 * @author karlamatias
 */
public abstract class Mapping <T>{
    
    private Gson gson;
    final Class <T> typeConverter;

    public Mapping(Class <T> typeConverter) {
        this.gson = new Gson();
        this.typeConverter = typeConverter;
    }
    
    
    public T ConvertirdeJson(String json){
        return gson.fromJson(json, typeConverter);
    }
    
    public String ConvertiraJson(T object){
        return gson.toJson(object, typeConverter);
    }
    
}
