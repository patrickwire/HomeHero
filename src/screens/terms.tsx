import React, { useEffect, useState, useContext } from "react";
import "./onboarding.css";
import { intros } from "../data/intros";
import { Fab } from "@material-ui/core";
import icon_arrow from "../assets/icon_arrow_purple.svg";
import { useHistory } from "react-router-dom";

export const Terms = () => {
  return (
    <div className="onboardingScreen">
      <div>
        <div className="title">AGBs & Datenschutz</div>
        <div className="text">
          <p>
            AGB &sect;1 Vertragliche Zusicherung, &Auml;nderung der
            Nutzungsbedingungen 1.1 Die nachfolgenden Nutzungsbedingungen regeln
            das vertragliche Verh&auml;ltnis zwischen dem Anbieter der
            Internetseite und der App Heldenzeit mit Sitz in der Clara-Schumann
            Str. 2, 73092 Heiningen (nachfolgend Anbieter) und dem Nutzer. 1.2
            Die Internetseite und die App Heldenzeit stehen dem Nutzer
            kostenfrei zur Verf&uuml;gung. 1.3 Der Anbieter ist berechtigt,
            diese Bedingungen zu &auml;ndern und anzupassen.Der Anbieter wird
            dem Nutzer die ge&auml;nderten Bedingungen in Textform
            &uuml;bermitteln und auf die Neuregelungen besonders hinweisen.
            Zugleich wird der Anbieter dem Nutzer eine angemessene Frist
            f&uuml;r die Erkl&auml;rung einr&auml;umen, ob er die
            ge&auml;nderten Nutzungsbedingungen f&uuml;r die weitere
            Inanspruchnahme der Leistungen akzeptiert. Erfolgt innerhalb dieser
            Frist keine Erkl&auml;rung, so gelten die ge&auml;nderten
            Bedingungen als vereinbart. Der Anbieter wird den Nutzer bei
            Fristbeginn ausdr&uuml;cklich auf diese Rechtsfolge hinweisen.
            Widerspricht der Nutzer der &Auml;nderung dieser Bedingungen, so ist
            der Anbieter berechtigt,den Nutzungsvertrag zum Zeitpunkt des
            Inkrafttretens der Nutzungsbedingungen gegen&uuml;ber den
            &uuml;brigen Nutzern, fristlos zu k&uuml;ndigen. &sect;2 Gegenstand
            des Nutzungsvertrages 2.1 Gegenstand des Nutzungsvertrages ist die
            Bereitstellung einer weltweit zug&auml;nglichen Internetcommunity
            und Informationsplattform mit dem Namen Heldenzeit durch den
            Anbieter, sowie die dazugeh&ouml;rige App. 2.2 Heldenzeit stellt dem
            Nutzer folgende Nutzungsm&ouml;glichkeiten zur Verf&uuml;gung:
            Anlegung eines eigenen Profils zur Person Einsehen von Aufgaben in
            verschiedenen Kategorien Anlegen von Aufgaben Upload von eigenem
            Content und Contentmanagement &uuml;ber den Nutzeraccount.
            Kommunikation innerhalb seiner Nutzergemeinschaft Eintrag von
            Mitteilungen und Kommentaren in Blogs zu den dort vorgesehenen
            Themenbereichen. 2.3 Der Anbieter &uuml;bernimmt keinerlei
            Gew&auml;hr f&uuml;r die Richtigkeit und Vollst&auml;ndigkeit der
            enthaltenen Informationen und Daten, Verf&uuml;gbarkeit der Dienste,
            Verlust von auf Heldenzeit-app.com abgespeicherten Daten oder
            Nutzbarkeit f&uuml;r irgendeinen bestimmten Zweck. 2.4 Der Anbieter
            kann f&uuml;r diese App kostenlose Updates im jeweiligen App Store
            bereitstellen, die den Funktionsumfang der App &auml;ndern. Die
            genauen Systemanforderungen und der vollst&auml;ndige
            Funktionsumfang solcher Updates und der App in ihrer aktualisierten
            Fassung ergeben sich aus der Produkt- und Updatebeschreibung im
            jeweiligen App Store. 2.6 Dieser Nutzungsvertrag gelten entsprechend
            f&uuml;r alle In-App-K&auml;ufe und Updates und f&uuml;r die App in
            der jeweils durch In-App-K&auml;ufer und/oder Updates aktualisierten
            Fassung. &sect;3 Registrierung, Nutzerkonto, Umgang mit
            Passw&ouml;rtern 3.1 F&uuml;r die Nutzung von Heldenzeit k&ouml;nnen
            sich ausschlie&szlig;lich nat&uuml;rliche Personen anmelden. 3.2 Der
            Nutzer ist verpflichtet, gem&auml;&szlig; den Vorgaben des
            Registrierungsformulars wahrheitsgem&auml;&szlig;e und
            vollst&auml;ndige Angaben zu seiner Person zu machen und seine Daten
            stets auf dem aktuellen Stand zu halten. 3.3 Der Nutzer ist
            verpflichtet, sein Passwort geheim zu halten, sicher aufzubewahren
            und Dritten gegen&uuml;ber nicht zug&auml;nglich zu machen. Wird das
            Passwort gegen&uuml;ber Dritten bekannt, so ist der Nutzer
            verpflichtet unter der Rubrik Passwort &auml;ndern unverz&uuml;glich
            ein neues Passwort anzulegen. Der Nutzer ist nicht berechtigt, sein
            Nutzerkonto Dritten zur Verf&uuml;gung zu stellen. Der Nutzer nimmt
            zur Kenntnis, dass es f&uuml;r die Handlungen eines Dritten, dem er
            sein Nutzerkonto zur Verf&uuml;gung stellt ist, vollumf&auml;nglich
            verantwortlich ist. 3.4 Mit der Registrierung erkl&auml;rt sich der
            Nutzer bereit, E-Mails von Heldenzeit zu empfangen, die sich auf
            Produktneuheiten beziehen oder den Spirit von Heldenzeit vermitteln.
            &sect;4 Datenschutz/Privatsph&auml;re 4.1 Sie k&ouml;nnen unsere
            Seite besuchen, ohne Angaben zu Ihrer Person zu machen. Wir
            speichern lediglich Zugriffsdaten ohne Personenbezug wie z.B. den
            Namen Ihres Internet Service Providers, die Seite, von der aus Sie
            uns besuchen oder den Namen der angeforderten Datei. Diese Daten
            werden ausschlie&szlig;lich zur Verbesserung unseres Angebotes
            ausgewertet und erlauben keinen R&uuml;ckschluss auf Ihre Person.
            4.2 Personenbezogene Daten werden nur erhoben, wenn Sie uns diese im
            Rahmen Ihrer Registrierung freiwillig mitteilen. Bei Anmeldung zum
            Newsletter wird Ihre E-Mail-Adresse mit Ihrer Einwilligung f&uuml;r
            eigene Werbezwecke genutzt, bis Sie sich vom Newsletter abmelden.
            4.3 Wir sichern unsere Website und sonstigen Systeme durch
            technische und organisatorische Ma&szlig;nahmen gegen Verlust,
            Zerst&ouml;rung, Zugriff, Ver&auml;nderung oder Verbreitung Ihrer
            Daten durch unbefugte Personen. Der Zugang zu Ihrem Kundenkonto ist
            nur nach Eingabe Ihres pers&ouml;nlichen Passwortes m&ouml;glich.
            Sie sollten Ihre Zugangsinformationen stets vertraulich behandeln
            und das Browserfenster schlie&szlig;en, wenn Sie die Kommunikation
            mit uns beendet haben, insbesondere wenn Sie den Computer gemeinsam
            mit anderen nutzen. 4.4 Auf bestimmten Seiten kommen Cookies zum
            Einsatz, ohne dass wir Sie darauf hinweisen k&ouml;nnen. Die meisten
            Browser sind so eingestellt, dass sie Cookies automatisch
            akzeptieren. Sie k&ouml;nnen das Speichern von Cookies jedoch
            deaktivieren oder Ihren Browser so einstellen, dass er Sie
            benachrichtigt, sobald Cookies gesendet werden &sect;5 Allgemeine
            Pflichten des Nutzers 5.1 Der Nutzer darf die vom Anbieter
            bereitgestellten Nutzungsm&ouml;glichkeiten nur im Rahmen der
            vertraglich vorausgesetzten Zwecke nutzen. Jede &uuml;ber diese
            Zweckbindung hinausgehende missbr&auml;uchliche Nutzung ist dem
            Nutzer untersagt, dazu z&auml;hlen insbesondere folgende Handlungen:
            systematisches Auslesen der Kontaktdaten anderer Nutzer zum Zwecke
            der Weitergabe an Dritte; unzumutbare Bel&auml;stigungen anderer
            Nutzer durch aggressive, obsz&ouml;ne, beleidigende, verleumderische
            oder aufdringliche Forenbeitr&auml;ge oder Nachrichten; unzumutbare
            Bel&auml;stigungen anderer Nutzer durch das massenweise Versenden
            von unverlangter Werbung; umfangreiche oder dauerhafte Nutzung von
            Heldenzeit-app.com zur Ver&ouml;ffentlichung und Verbreitung von
            Inhalten, die sachlich nicht dem Zweck oder von Heldenzeit-app.com
            oder den Blogs und Foren entsprechen und die die Attraktivit&auml;t
            von Heldenzeit-app.com f&uuml;r andere Nutzer beeintr&auml;chtigen
            k&ouml;nnen; jegliche Ma&szlig;nahmen, die zu
            &uuml;berm&auml;&szlig;igen Systembelastungen oder zu
            Systemst&ouml;rungen f&uuml;hren; das Nutzen fremder
            Identit&auml;ten f&uuml;r die Registrierung, das Einstellen von
            Beitr&auml;gen oder das Versenden von Nachrichten. 5.2 Jede der
            vorbenannten Pflichtverletzungen berechtigt den Anbieter zur
            fristlosen K&uuml;ndigung des Nutzungsvertrages und zur Sperrung des
            Nutzeraccounts. Dar&uuml;ber hinaus ist der Anbieter berechtigt, die
            Freischaltung eines neuen Accounts f&uuml;r diesen Nutzer f&uuml;r
            die Dauer eines Jahres ab der K&uuml;ndigung zu verweigern. 5.3
            &Auml;u&szlig;erungen und Kommentare in Nachrichten, Foren- oder
            Blogeintr&auml;gen sollen den Regeln eines h&ouml;flichen und
            respektvollen Umgangs untereinander folgen. Kritiken und
            Meinungs&auml;u&szlig;erungen sollten konstruktiv
            ge&auml;u&szlig;ert werden und d&uuml;rfen. &sect;6 Pflichten des
            Nutzers bez&uuml;glich eingestellter Inhalte 6.1 Der Nutzer hat
            sicherzustellen, dass er durch das Einstellen von Inhalten (Texte,
            Bilder, Fotos, Videos, Namen, Marken u. &Auml;.) keine Rechte
            Dritter verletzt (z.B. Verletzung von Urheberrechten,
            Pers&ouml;nlichkeitsrechtsverletzungen, Wettbewerbsverletzungen).
            6.2 Der Nutzer stellt den Anbieter von s&auml;mtlichen
            Anspr&uuml;chen Dritter frei, die diese in Bezug auf eine von ihm
            begangene und von ihm zu vertretende Rechtsverletzung gegen&uuml;ber
            dem Anbieter geltend machen. Der Nutzer &uuml;bernimmt
            diesbez&uuml;glich s&auml;mtliche notwendigen Kosten der
            Rechtsverteidigung. 6.3 Der Anbieter ist berechtigt, die vom Nutzer
            eingestellten Inhalte zu l&ouml;schen oder zu deaktivieren, wenn
            diese gegen die Rechte Dritter versto&szlig;en oder Dritte wegen
            einer Rechtsverletzung Anspr&uuml;che geltend machen, deren
            Begr&uuml;ndetheit nicht offenkundig auszuschlie&szlig;en ist. 6.4
            Erh&auml;lt der Anbieter von einer m&ouml;glichen Rechtsverletzung
            durch die Inhalte des Nutzers Kenntnis, wird er dem Nutzer hiervon
            unverz&uuml;glich in Textform Mitteilung machen. 6.5 Aufgrund der
            sich st&auml;ndig ver&auml;ndernden Inhalte bei Kommentaren und im
            Forum ist es dem Betreiber nicht m&ouml;glich, alle Beitr&auml;ge
            l&uuml;ckenlos zu sichten, inhaltlich zu pr&uuml;fen und die
            unmittelbare aktive Kontrolle dar&uuml;ber auszu&uuml;ben. Es wird
            keine Verantwortung f&uuml;r den Inhalt, die Korrektheit und die
            Form der eingestellten Beitr&auml;ge &uuml;bernommen. Sollte der
            Nutzer auf Kommentare sto&szlig;en, deren Inhalt zweifelhaft oder
            regelwidrig erscheint, kann er &uuml;ber eine Meldefunktion die
            Redaktion informieren. &sect;7 Beendigung 7.1 Der Nutzer ist
            berechtigt, den Nutzungsvertrag mit dem Anbieter jederzeit ohne
            Angabe von Gr&uuml;nden und ohne Einhaltung einer Frist zu
            k&uuml;ndigen. Die K&uuml;ndigung bedarf einer E-Mail an
            XXXXX@heldenzeit-app.de. Im Falle der K&uuml;ndigung wird das Profil
            des Nutzers gel&ouml;scht, seine in Foren oder Blogs
            ver&ouml;ffentlichten Beitr&auml;ge und Inhalte bleiben jedoch, ohne
            Verlinkung zu seinem Profil, bestehen. 7.2 Der Anbieter ist
            berechtigt, den Nutzungsvertrag mit einer Frist von einem Monat zum
            Ende des vorangehenden Monats zu k&uuml;ndigen. 7.4 Der Anbieter ist
            neben der fristgebundenen K&uuml;ndigung berechtigt, den
            Nutzungsvertrag ohne Einhaltung einer Frist zu k&uuml;ndigen, wenn
            ein wichtiger Grund vorliegt. Ein wichtiger Grund liegt insbesondere
            dann vor, wenn der Nutzer nachhaltig und schwerwiegend gegen seine
            vertraglichen Pflichten verst&ouml;&szlig;t (vgl. &sect;5) bei der
            Nutzung von Heldenzeit-app.com schuldhaft und schwerwiegend gegen
            gesetzliche Vorschriften verst&ouml;&szlig;t. In diesen F&auml;llen
            ist der Anbieter auch berechtigt, den Nutzeraccount zu l&ouml;schen
            und die Einrichtung eines neuen Accounts f&uuml;r diesen Nutzer
            f&uuml;r die Dauer eines Jahres nach Zugang der K&uuml;ndigung zu
            verweigern. 7.5 Der Anbieter wird von seinem Recht zur ordentlichen
            K&uuml;ndigung und zur L&ouml;schung des Nutzeraccounts Gebrauch
            machen, wenn der Nutzer sich mindestens ein Jahr lang nicht mehr
            eingelogged und auf eine Erinnerungsnachricht nicht reagiert hat.
            &sect;8 Haftung 8.1 Der Anbieter haftet in F&auml;llen des Vorsatzes
            oder der groben Fahrl&auml;ssigkeit nach den gesetzlichen
            Bestimmungen. Die Haftung f&uuml;r Garantien erfolgt
            verschuldensunabh&auml;ngig. F&uuml;r leichte Fahrl&auml;ssigkeit
            haftet der Anbieter ausschlie&szlig;lich nach den Vorschriften des
            Produkthaftungsgesetzes, wegen der Verletzung des Lebens, des
            K&ouml;rpers oder der Gesundheit oder wegen der Verletzung
            wesentlicher Vertragspflichten. Der Schadensersatzanspruch f&uuml;r
            die leicht fahrl&auml;ssige Verletzung wesentlicher
            Vertragspflichten ist jedoch auf den vertragstypischen,
            vorhersehbaren Schaden begrenzt, soweit nicht wegen der Verletzung
            des Lebens, des K&ouml;rpers oder der Gesundheit gehaftet wird.
            F&uuml;r das Verschulden von Erf&uuml;llungsgehilfen und Vertretern
            haftet der Anbieter in demselben Umfang. 8.2 Die Regelung des
            vorstehenden &sect;8.1 erstreckt sich auf Schadensersatz neben der
            Leistung, den Schadensersatz statt der Leistung und den
            Ersatzanspruch wegen vergeblicher Aufwendungen, gleich aus welchem
            Rechtsgrund, einschlie&szlig;lich der Haftung wegen M&auml;ngeln,
            Verzugs oder Unm&ouml;glichkeit. &sect;9 Urheberrecht Alle
            Informationen dieser Web-Seite werden wie angegeben ohne Anspruch
            auf Richtigkeit, Vollst&auml;ndigkeit oder Aktualit&auml;t zur
            Verf&uuml;gung gestellt. Wenn nicht ausdr&uuml;cklich anderweitig in
            dieser Publikation zu verstehen gegeben, und zwar in Zusammenhang
            mit einem bestimmten Ausschnitt, einer Datei, oder einem Dokument,
            ist jedermann dazu berechtigt, dieses Dokument anzusehen, zu
            kopieren, zu drucken und zu verteilen, unter den folgenden
            Bedingungen: Das Dokument darf nur f&uuml;r nichtkommerzielle
            Informationszwecke genutzt werden. Jede Kopie dieses Dokuments oder
            eines Teils davon muss diese urheberrechtliche Erkl&auml;rung und
            das urheberrechtliche Schutzzeichen des Anbieters enthalten. Das
            Dokument, jede Kopie des Dokuments oder eines Teils davon
            d&uuml;rfen nicht ohne schriftliche Zustimmung des Anbieters
            ver&auml;ndert werden. Der Anbieter beh&auml;lt sich das Recht vor,
            diese Genehmigung jederzeit zu widerrufen, und jede Nutzung muss
            sofort eingestellt werden, sobald eine schriftliche Bekanntmachung
            seitens des Betreibers ver&ouml;ffentlicht wird. &sect;10 Hinweis
            gem&auml;&szlig; Teledienstgesetz F&uuml;r Internetseiten Dritter,
            auf die die dieses Angebot durch sog. Links verweist, tragen die
            jeweiligen Anbieter die Verantwortung. Der Anbieter ist f&uuml;r den
            Inhalt solcher Seiten Dritter nicht verantwortlich. Des weiteren
            kann die Web-Seite ohne unser Wissen von anderen Seiten mittels sog.
            Links angelinkt werden. Der Anbieter &uuml;bernimmt keine
            Verantwortung f&uuml;r Darstellungen, Inhalt oder irgendeine
            Verbindung zu dieser Web-Seite in Web-Seiten Dritter. F&uuml;r
            fremde Inhalte ist der Anbieter nur dann verantwortlich, wenn von
            ihnen (d.h. auch von einem rechtswidrigen oder strafbaren Inhalt)
            positive Kenntnis vorliegt und es technisch m&ouml;glich und
            zumutbar ist, deren Nutzung zu verhindern. Der Anbieter ist nach dem
            Teledienstgesetz jedoch nicht verpflichtet, die fremden Inhalte
            st&auml;ndig zu &uuml;berpr&uuml;fen. &sect;11 Schlussbestimmungen
            11.1 Es gilt ausschlie&szlig;lich das Recht der Bundesrepublik
            Deutschland unter Ausschluss des Internationalen Privatrechts und
            des UN-Kaufrechts. Hiervon ausgenommen sind Anspr&uuml;che auf dem
            Gebiet der gewerblichen Schutzrechte und des Urheberrechts. 11.2 Die
            etwaige Unwirksamkeit einer Bestimmung dieser Nutzungsbedingungen
            l&auml;sst die Wirksamkeit der Nutzungsbedingungen im &Uuml;brigen
            unber&uuml;hrt. 11.3 F&uuml;r die Bestimmung des Gerichtsstandes
            gilt Folgendes: Hat der Nutzer keinen allgemeinen Gerichtsstand in
            der Bundesrepublik Deutschland so ist Gerichtsstand der Sitz des
            Anbieters. 11.4 Diese Nutzungsbedingungen beziehen sich auf
            Heldenzeit-app.com. Sofern Teile oder einzelne Formulierungen dieses
            Textes der geltenden Rechtslage nicht, nicht mehr oder nicht
            vollst&auml;ndig entsprechen sollten, bleiben die &uuml;brigen Teile
            des Dokumentes in ihrem Inhalt und ihrer G&uuml;ltigkeit davon
            unber&uuml;hrt.
          </p>
          <p>
            <strong>Datenschutzerkl&auml;rung</strong>
          </p>
          <p>
            <strong>
              Verantwortlicher f&uuml;r die Datenverarbeitung ist:
            </strong>
            <br /> Patrick Müller
            <br /> Clara-SChumann-Str 2<br /> 73092 Heinigen
            <br /> Deutschland
            <br /> <br /> mp@floatec.de
          </p>
          <p>
            Wir freuen uns &uuml;ber Ihr Interesse an unserer Webseite. Der
            Schutz Ihrer Privatsph&auml;re ist f&uuml;r uns sehr wichtig.
            Nachstehend informieren wir Sie ausf&uuml;hrlich &uuml;ber den
            Umgang mit Ihren Daten.
          </p>
          <p> </p>
          <p>
            <strong>1.&nbsp;Zugriffsdaten und Hosting</strong>
          </p>
          <p> </p>
          <p>
            Sie k&ouml;nnen unsere Webseiten besuchen, ohne Angaben zu Ihrer
            Person zu machen. Bei jedem Aufruf einer Webseite speichert der
            Webserver lediglich automatisch ein sogenanntes Server-Logfile, das
            z.B. den Namen der angeforderten Datei, Ihre IP-Adresse, Datum und
            Uhrzeit des Abrufs, &uuml;bertragene Datenmenge und den anfragenden
            Provider (Zugriffsdaten) enth&auml;lt und den Abruf dokumentiert.
          </p>
          <p>
            Diese Zugriffsdaten werden ausschlie&szlig;lich zum Zwecke der
            Sicherstellung eines st&ouml;rungsfreien Betriebs der Seite sowie
            der Verbesserung unserer Online-Pr&auml;senz ausgewertet. Dies dient
            gem&auml;&szlig; Art. 6 Abs. 1 S. 1 lit. f DSGVO der Wahrung unserer
            im Rahmen einer Interessensabw&auml;gung &uuml;berwiegenden
            berechtigten Interessen an einer korrekten Darstellung unserer
            Online-Pr&auml;senz. Alle Zugriffsdaten werden sp&auml;testens
            sieben Tage nach Ende Ihres Seitenbesuchs gel&ouml;scht.
          </p>
          <p>
            <strong>Hostingdienstleistungen durch einen Drittanbieter</strong>
            <br /> Im Rahmen einer Verarbeitung in unserem Auftrag erbringt ein
            Drittanbieter f&uuml;r uns die Dienste zum Hosting und zur
            Darstellung der Webseite. Alle Daten, die im Rahmen der Nutzung
            dieser Webseite oder in daf&uuml;r vorgesehenen Formularen wie
            folgend beschrieben erhoben werden, werden auf seinen Servern
            verarbeitet. Eine Verarbeitung auf anderen Servern findet nur in dem
            hier erl&auml;uterten Rahmen statt. <strong> </strong>
          </p>
          <p>
            Dieser Dienstleister sitzt innerhalb eines Landes der
            Europ&auml;ischen Union oder des Europ&auml;ischen Wirtschaftsraums.
          </p>
          <p> </p> <p> </p>
          <p>
            <strong>2.&nbsp;Cookies</strong>
          </p>
          <p>
            Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung
            bestimmter Funktionen zu erm&ouml;glichen, um passende Produkte
            anzuzeigen oder zur Marktforschung verwenden wir auf verschiedenen
            Seiten sogenannte Cookies. Dies dient der Wahrung unserer im Rahmen
            einer Interessensabw&auml;gung &uuml;berwiegenden berechtigten
            Interessen an einer optimierten Darstellung unseres Angebots
            gem&auml;&szlig; Art. 6 Abs. 1 S. 1 lit. f DSGVO. Cookies sind
            kleine Textdateien, die automatisch auf Ihrem Endger&auml;t
            gespeichert werden. Einige der von uns verwendeten Cookies werden
            nach Ende der Browser-Sitzung, also nach Schlie&szlig;en Ihres
            Browsers, wieder gel&ouml;scht (sog. Sitzungs-Cookies). Andere
            Cookies verbleiben auf Ihrem Endger&auml;t und erm&ouml;glichen uns,
            Ihren Browser beim n&auml;chsten Besuch wiederzuerkennen
            (persistente Cookies). Die Dauer der Speicherung k&ouml;nnen Sie der
            &Uuml;bersicht in den Cookie-Einstellungen Ihres Webbrowsers
            entnehmen. Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie
            &uuml;ber das Setzen von Cookies informiert werden und einzeln
            &uuml;ber deren Annahme entscheiden oder die Annahme von Cookies
            f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en.
            Jeder Browser unterscheidet sich in der Art, wie er die
            Cookie-Einstellungen verwaltet. Diese ist in dem Hilfemen&uuml;
            jedes Browsers beschrieben, welches Ihnen erl&auml;utert, wie Sie
            Ihre Cookie-Einstellungen &auml;ndern k&ouml;nnen. Diese finden Sie
            f&uuml;r die jeweiligen Browser unter den folgenden Links:
          </p>
          <p>
            <a
              href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies"
              target="_blank"
            >
              Internet Explorer&trade;
            </a>
            <br />
            <a
              href="https://support.apple.com/de-de/guide/safari/sfri11471/12.0/mac/10.14"
              target="_blank"
            >
              Safari&trade;
            </a>
            <br />
            <a
              href="https://support.google.com/chrome/answer/95647?hl=de&amp;hlrm=en"
              target="_blank"
            >
              Chrome&trade;
            </a>
            <br />
            <a
              href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen"
              target="_blank"
            >
              Firefox&trade;
            </a>
            <br />
            <a
              href="https://help.opera.com/de/latest/web-preferences/#cookies"
              target="_blank"
            >
              Opera&trade;
            </a>
          </p>
          <p>
            Bei der Nichtannahme von Cookies kann die Funktionalit&auml;t
            unserer Website eingeschr&auml;nkt sein.
          </p>
          <p>
            <strong>3.&nbsp;Online-Marketing</strong>
          </p>
          <p>
            <strong>Google Fonts</strong>
            <br /> Auf dieser Webseite ist der Script Code &bdquo;Google
            Fonts&ldquo; eingebunden. Google Fonts ist ein Angebot der Google
            Ireland Limited, einer nach irischem Recht eingetragenen und
            betriebenen Gesellschaft mit Sitz in Gordon House, Barrow Street,
            Dublin 4, Irland. (
            <a href="http://www.google.de" target="_blank">
              www.google.de
            </a>
            ). Dies dient der Wahrung unserer im Rahmen einer
            Interessensabw&auml;gung &uuml;berwiegenden berechtigten Interessen
            an einer einheitlichen Darstellung der Inhalte auf unserer Webseite
            gem&auml;&szlig; Art. 6 Abs. 1 lit. f) DSGVO. In diesem Rahmen wird
            eine Verbindung zwischen dem von Ihnen verwendeten Browser und den
            Servern von Google hergestellt. Hierdurch erlangt Google Kenntnis
            dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse unsere Webseite
            aufgerufen wurde.
            <br /> Soweit Informationen auf Server von Google in den USA
            &uuml;bertragen und dort gespeichert werden, ist die amerikanische
            Gesellschaft Google LLC unter dem EU-US-Privacy Shield zertifiziert.
            Ein aktuelles Zertifikat kann
            <a href="https://www.privacyshield.gov/list" target="_blank">
              hier
            </a>
            eingesehen werden. Aufgrund dieses Abkommens zwischen den USA und
            der Europ&auml;ischen Kommission hat letztere f&uuml;r unter dem
            Privacy Shield zertifizierte Unternehmen ein angemessenes
            Datenschutzniveau festgestellt. Weitergehende Informationen
            &uuml;ber die Datenverarbeitung durch Google finden Sie in den
            <a href="https://policies.google.com/privacy" target="_blank">
              Datenschutzhinweisen
            </a>
            von Google.
          </p>
          <p>
            <strong>4.&nbsp;Social Media</strong>
          </p>
          <p>
            Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und
            Nutzung der Daten durch die Anbieter auf deren Seiten sowie eine
            Kontaktm&ouml;glichkeit und Ihre diesbez&uuml;glichen Rechte und
            Einstellungsm&ouml;glichkeiten zum Schutz Ihrer Privatsph&auml;re
            entnehmen Sie bitte den Datenschutzhinweisen der Anbieter:
          </p>
          <p>
            <strong>
              Unsere Onlinepr&auml;senz auf Facebook, Twitter, Instagram,
              LinkedIn
            </strong>
          </p>
          <p>
            Unsere Pr&auml;senz auf sozialen Netzwerken und Plattformen dient
            einer besseren, aktiven Kommunikation mit unseren Kunden und
            Interessenten. Wir informieren dort &uuml;ber unsere Produkte und
            laufende Sonderaktionen.
            <br /> Bei dem Besuch unserer Onlinepr&auml;senzen in sozialen
            Medien k&ouml;nnen Ihre Daten f&uuml;r Marktforschungs- und
            Werbezwecke automatisch erhoben und gespeichert werden. Aus diesen
            Daten werden unter Verwendung von Pseudonymen sog. Nutzungsprofile
            erstellt. Diese k&ouml;nnen verwendet werden, um z.B. Werbeanzeigen
            innerhalb und au&szlig;erhalb der Plattformen zu schalten, die
            mutma&szlig;lich Ihren Interessen entsprechen. Zu diesem Zweck
            werden im Regelfall Cookies auf Ihrem Endger&auml;t eingesetzt. In
            diesen Cookies werden das Besucherverhalten und die Interessen der
            Nutzer gespeichert. Dies dient gem. Art. 6 Abs. 1 lit. f. DSGVO der
            Wahrung unserer im Rahmen einer Interessensabw&auml;gung
            &uuml;berwiegenden berechtigten Interessen an einer optimierten
            Darstellung unseres Angebots und effektiver Kommunikation mit den
            Kunden und Interessenten. Falls Sie von den jeweiligen Social-Media
            Plattformbetreibern um eine Einwilligung (Einverst&auml;ndnis) in
            die Datenverarbeitung gebeten werden, z.B. mit Hilfe einer Checkbox,
            ist die Rechtsgrundlage der Datenverarbeitung Art. 6 Abs. 1 lit. a
            DSGVO.
            <br /> Soweit die vorgenannten Social-Media Plattformen ihren
            Hauptsitz in den USA haben, gilt Folgendes: F&uuml;r die USA liegt
            ein Angemessenheitsbeschluss der Europ&auml;ischen Kommission vor.
            Dieser geht zur&uuml;ck auf den EU-US Privacy Shield. Ein aktuelles
            Zertifikat f&uuml;r das jeweilige Unternehmen kann
            <a href="https://www.privacyshield.gov/list" target="_blank">
              hier
            </a>
            eingesehen werden.
            <br /> Die detaillierten Informationen zur Verarbeitung und Nutzung
            der Daten durch die Anbieter auf deren Seiten sowie eine
            Kontaktm&ouml;glichkeit und Ihre diesbez&uuml;glichen Rechte und
            Einstellungsm&ouml;glichkeiten zum Schutz Ihrer Privatsph&auml;re,
            insbesondere Widerspruchsm&ouml;glichkeiten (Opt-Out), entnehmen Sie
            bitte den unten verlinkten Datenschutzhinweisen der Anbieter.
            Sollten Sie diesbez&uuml;glich dennoch Hilfe ben&ouml;tigen,
            k&ouml;nnen Sie sich an uns wenden.
          </p>
          <p>
            Facebook:
            <a href="https://www.facebook.com/about/privacy" target="_blank">
              https://www.facebook.com/about/privacy/
            </a>
            <br /> Die Datenverarbeitung erfolgt auf Grundlage einer
            Vereinbarung zwischen gemeinsam Verantwortlichen gem&auml;&szlig;
            Art. 26 DSGVO, die Sie
            <a
              href="https://www.facebook.com/legal/terms/page_controller_addendum"
              target="_blank"
            >
              hier
            </a>
            einsehen k&ouml;nnen.
            <br /> Weitere Informationen zur Datenverarbeitung im Rahmen des
            Besuchs einer Facebook Fanpage (Informationen zu Insights-Daten)
            finden Sie
            <a
              href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
              target="_blank"
            >
              hier
            </a>
            .
          </p>
          <p>
            Twitter:
            <a href="https://twitter.com/de/privacy" target="_blank">
              https://twitter.com/de/privacy
            </a>
          </p>
          <p>
            Instagram:
            <a
              href="https://help.instagram.com/519522125107875"
              target="_blank"
            >
              https://help.instagram.com/519522125107875
            </a>
          </p>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/legal/privacy-policy"
              target="_blank"
            >
              https://www.linkedin.com/legal/privacy-policy
            </a>
          </p>
          <p>Widerspruchsm&ouml;glichkeit (Opt-Out):</p>
          <p>
            Facebook:
            <a href="https://www.facebook.com/settings?tab=ads" target="_blank">
              https://www.facebook.com/settings?tab=ads
            </a>
          </p>
          <p>
            Twitter:
            <a href="https://twitter.com/personalization" target="_blank">
              https://twitter.com/personalization
            </a>
          </p>
          <p>
            Instagram:
            <a
              href="https://help.instagram.com/519522125107875"
              target="_blank"
            >
              https://help.instagram.com/519522125107875
            </a>
          </p>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
              target="_blank"
            >
              https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
            </a>
          </p>
          <p>
            <strong>5.&nbsp;Kontaktm&ouml;glichkeiten und Ihre Rechte</strong>
          </p>
          <p>
            
            <p> </p>
          </p>
          <p>Als Betroffener haben Sie folgende Rechte:</p>
          <ul>
            
            <li>
              gem&auml;&szlig; Art. 15 DSGVO das Recht, in dem dort bezeichneten
              Umfang Auskunft &uuml;ber Ihre von uns verarbeiteten
              personenbezogenen Daten zu verlangen;
            </li>
            <li>
              gem&auml;&szlig; Art. 16 DSGVO das Recht, unverz&uuml;glich die
              Berichtigung unrichtiger oder Vervollst&auml;ndigung Ihrer bei uns
              gespeicherten personenbezogenen Daten zu verlangen;
            </li>
            <li>
              gem&auml;&szlig; Art. 17 DSGVO das Recht, die L&ouml;schung Ihrer
              bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit
              nicht die weitere Verarbeitung
              <ul>
                
                <li>
                  zur Aus&uuml;bung des Rechts auf freie
                  Meinungs&auml;u&szlig;erung und Information;
                </li>
                <li>zur Erf&uuml;llung einer rechtlichen Verpflichtung;</li>
                <li>aus Gr&uuml;nden des &ouml;ffentlichen Interesses oder</li>
                <li>
                  zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
                  Rechtsanspr&uuml;chen erforderlich ist;
                </li>
              </ul>
            </li>
            <li>
              gem&auml;&szlig; Art. 18 DSGVO das Recht, die Einschr&auml;nkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen,
              soweit
              <ul>
                
                <li>
                  die Richtigkeit der Daten von Ihnen bestritten wird;
                </li>
                <li>
                  die Verarbeitung unrechtm&auml;&szlig;ig ist, Sie aber deren
                  L&ouml;schung ablehnen;
                </li>
                <li>
                  wir die Daten nicht mehr ben&ouml;tigen, Sie diese jedoch zur
                  Geltendmachung, Aus&uuml;bung oder Verteidigung von
                  Rechtsanspr&uuml;chen ben&ouml;tigen oder
                </li>
                <li>
                  Sie gem&auml;&szlig; Art. 21 DSGVO Widerspruch gegen die
                  Verarbeitung eingelegt haben;
                </li>
              </ul>
            </li>
            <li>
              gem&auml;&szlig; Art. 20 DSGVO das Recht, Ihre personenbezogenen
              Daten, die Sie uns bereitgestellt haben, in einem strukturierten,
              g&auml;ngigen und maschinenlesebaren Format zu erhalten oder die
              &Uuml;bermittlung an einen anderen Verantwortlichen zu verlangen;
            </li>
            <li>
              gem&auml;&szlig; Art. 77 DSGVO das Recht, sich bei einer
              Aufsichtsbeh&ouml;rde zu beschweren. In der Regel k&ouml;nnen Sie
              sich hierf&uuml;r an die Aufsichtsbeh&ouml;rde Ihres &uuml;blichen
              Aufenthaltsortes oder Arbeitsplatzes oder unseres
              Unternehmenssitzes wenden.
            </li>
          </ul>
          <p>
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
            personenbezogenen Daten, bei Ausk&uuml;nften, Berichtigung,
            Einschr&auml;nkung oder L&ouml;schung von Daten sowie Widerruf
            erteilter Einwilligungen oder Widerspruch gegen eine bestimmte
            Datenverwendung wenden Sie sich bitte direkt an uns &uuml;ber die
            Kontaktdaten in unserem Impressum.
          </p>
          <table >
            
            <tbody>
              
              <tr>
                
                <td>
                  
                  <p>
                    <strong>Widerspruchsrecht</strong>
                    <br /> Soweit wir zur Wahrung unserer im Rahmen einer
                    Interessensabw&auml;gung &uuml;berwiegenden berechtigten
                    Interessen personenbezogene Daten wie oben erl&auml;utert
                    verarbeiten, k&ouml;nnen Sie dieser Verarbeitung mit Wirkung
                    f&uuml;r die Zukunft widersprechen. Erfolgt die Verarbeitung
                    zu Zwecken des Direktmarketings, k&ouml;nnen Sie dieses
                    Recht jederzeit wie oben beschrieben aus&uuml;ben. Soweit
                    die Verarbeitung zu anderen Zwecken erfolgt, steht Ihnen ein
                    Widerspruchsrecht nur bei Vorliegen von Gr&uuml;nden, die
                    sich aus Ihrer besonderen Situation ergeben, zu.
                  </p>
                  <p>
                    Nach Aus&uuml;bung Ihres Widerspruchsrechts werden wir Ihre
                    personenbezogenen Daten nicht weiter zu diesen Zwecken
                    verarbeiten, es sei denn, wir k&ouml;nnen zwingende
                    schutzw&uuml;rdige Gr&uuml;nde f&uuml;r die Verarbeitung
                    nachweisen, die Ihre Interessen, Rechte und Freiheiten
                    &uuml;berwiegen, oder wenn die Verarbeitung der
                    Geltendmachung, Aus&uuml;bung oder Verteidigung von
                    Rechtsanspr&uuml;chen dient
                  </p>
                  <p>
                    Dies gilt nicht, wenn die Verarbeitung zu Zwecken des
                    Direktmarketings erfolgt. Dann werden wir Ihre
                    personenbezogenen Daten nicht weiter zu diesem Zweck
                    verarbeiten.
                  </p>
                  <p> </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
