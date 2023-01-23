import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    borderRadius: 5,
    flexDirection: 'row', // alinhar em linha, se stiver em column, alinhado em coluna
    alignItems: 'center',
    marginBottom: 10,
    height: 64
  },
  name: {
    color: "#FFF",
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  nameConcluida: {
    color: "#808080",
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    textDecorationLine: 'line-through'
  },
  circulo: {
    marginLeft: 10,
    height: 17.45,
    width: 17.45,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: 'center',
  },
  circuloConcluida: {
    marginLeft: 10,
    height: 17.45,
    width: 17.45,
    borderRadius: 24,
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
    alignItems: "center",
    justifyContent: 'center',
  },
  banner: {
    flexDirection: "row",
    padding: 60,
    justifyContent: "space-around",
  },
  tituloBanner: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "baseline",
  },
  inputTarefa: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 150,
    flex: 1,
    position: 'absolute',
  },
  textInput: {
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 10,
    fontSize: 16,
    flex: 1,
    marginRight: 4,
  },
  buttom: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttomText: {
    color: "#FFF",
    fontSize: 15,
  },
  listaView: {
    backgroundColor: "#1A1A1A",
    flex: 1,
  },
  informacaoTarefa: {
    paddingTop: 30,
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column'
  },
  textInfo: {
    color: '#4EA8DE',
  },
  emptyList: {
    color: "#fff",
    fontSize: 16,
    textAlign: 'center'
  },
  vazioListaTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
    paddingTop: 16,
  },
  vazioListaSubTexto: {
    fontSize: 14,
    color: '#808080'
  },
  info: {
    backgroundColor: "#1A1A1A",
    paddingTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  criadas: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE',
    paddingRight: 10
  },
  concluidas: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 10
  },
  separador: {
    backgroundColor: '#1A1A1A',
    alignItems: "center",
    justifyContent: 'center',
  },
  linha:{
    backgroundColor: '#333333',
    height: 1,
    width: '100%',
  }
});