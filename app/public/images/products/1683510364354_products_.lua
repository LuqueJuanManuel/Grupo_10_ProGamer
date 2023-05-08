-- Ciclos

-- FOR NUMERICO

--Sintaxis:

--for i=1,10 do -- la i es una variable local
--	print(i)  -- el numero 1,10 en realidad no es un numero si no desde donde hasta donde va a contar la variable
--end

-- asignacion aditiva:
--X = 10
--
--X = X + 10 --aca tomo el valor que tenia x y le sumo 10
--
--for i=1,10, do -- si yo añado otro valor a 1,10 ejemplo 1,10,2 sera cuantos numeros se salta
--	print(i)
--end

-- SINTAXIS FINAL

--for i=Inicio,Final,Saltos do
--
--end

--esto se puede usar para mostrar el contenido de una Table

--Table = {"Curso de Udemy", "LUA", 123}
--
--for i=1,3 do
--	print(Table[i])
--end

-- Tables

--las tables en lua son el equivalente
--a los vectores en otros lenguajes de programacion

-- las tables se declaran mediantes llaves {}
-- normalmente las tables son asignada a variables
-- estas tienen una cantidad infinita de tamaño
-- se le pueden agregar datos mediante comas
-- {"Ejemplo", 123, false, true}
-- pero tambiem se puede primero declarar la table
-- y luego añadirle datos mediante la funcion

--  table.insert(t, v)
--  t = Variable
--  v = Dato

-- ejemplo

--Variable = {}
--
--table.insert(Variable, "Udemy")

-- tambien hay otra forma
-- Haciendo uso de la siguiente sintaxis

-- Variable = {}
-- 
-- Variable[1] = "Udemy"
-- -- la posicion 1 de mi table equivale a Udemy
-- -- Pero antes la pocicion 1 equivalia a nil (inexistencia)
-- 
-- Variable[2] = "Udemy"
-- Variable[3] = "Udemy"
-- Variable[4] = "Udemy"
-- Variable[5] = "Udemy"
-- Variable[7] = "Udemy"

-- Esta forma transcribe
-- Pero table.insert agrega

-- tambien funciona con texto y booleanos ejemplo

--[[Variable1 = {}

    Variable["LUA"] = "Lua"
    Variable[true] = "Verdadero"
    Variable[false] = "Udemy"

    print(Variable["LUA"])]]

-- FOR IPAIRS

-- SINTAXIS

-- for i,v in ipairs(table_name) do
--    print(i,v)
-- end

--i -> Posicion
--v -> Dato
--la v y la i son simples nombres de variables
--ademas son locales 

--table_name -> Table

--ipairs es una funcion que sirve como funcion integradora para nuestro for
-- permite que el for itere numericamente hablando
-- itere = ejecutar repetidamente una serie de operaciones

--ejemplo

--Variable = {}
--
--Variable[1] = "Udemy"
--Variable[2] = "Udemy"
--Variable[3] = "Udemy"
--Variable[4] = "Udemy"
--Variable[5] = "Udemy"
--Variable["Udemy"] = "CursodeLua"
--Variable[7] = "Udemy"

--for i,v in ipairs(Variable) do
--    print(i,v)
--end

 --ignora el salto de numeros y tambien ignora el texto

 -- FOR PAIRS

 -- SINTAXIS

-- for k,v in pairs(table_name) do
--     print(k,v)
-- end

-- k = Posicion
-- v = valor

--este for no es secuencial ni numerical 
--
--Table = {"asd", 2, 3}
--Table["a"] = "Dato pos A"
--Table["b"] = "Dato pos B"
--Table[65] = "Dato pos 65"
--for k,v in pairs(Table) do
--    print(k,v)
--end

-- cada vez que lo ejecutes la posicion de los datos cambia

-- WHILE

-- SINTAXIS

--while condicion do
--    --codigo
--end

-- un ciclo while es un ciclo el cual
-- se repite un numero indefinido de veces hasta que una condicion deje de cumplirse

-- la condicion debe ser un booleano
-- hay casos donde la condicion no es un booleano pero lo mejor siempre es usar booleanos
-- para que este pare de ejecutarse la condicion tiene que volverse FALSE

-- REPEAT UNTIL

-- SINTAXIS

--repeat
--    --Codigo
--until condicion

-- A diferencia del while 
-- para que este pare de ejecutarse la condicion tiene que volverse verdadera

-- BREAK

-- SINTAXIS

-- con la palabra BREAK se puede parar cualquier ciclo
-- no debe haber nada de codigo despues de palabra break